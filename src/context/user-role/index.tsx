import React, { useEffect, useState } from "react";
import getUserRoleService from "service/user-role";
// import CustomSpinner from "components/shared/CustomSpinner";
import { USER_DATA } from "constants/globals";
import UserRoleContext from "./context";

type Props = {
  children: React.ReactNode;
};

export const UserRoleProvider = ({ children }: Props) => {
  const [role, setRole] = useState<string>("");

  const getRole = (authorities: string[]) => {
    if (authorities.includes("SOCIO")) return "socio";
    if (authorities.includes("BANQUERO")) return "banquero";
    if (authorities.includes("OPERACIONES")) return "operaciones";
    if (authorities.includes("ADMINISTRACION_APERTURA")) return "apertura";
    if (authorities.includes("COMPLIANCE_PLD")) return "pld";
    if (authorities.includes("COMPLIANCE_PRACTICA_VENTA")) return "venta";
    return "otro";
  };

  const delayTime = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 500);
    });
  };

  const processGetUserRole = async () => {
    const getUserRole = async () => {
      const { data, success } = await getUserRoleService();
      if (success) {
        const userRole = getRole(data.authorities || "");
        USER_DATA.onlyQuery = data.authorities.includes("DEMO");
        setRole(userRole);
      }
    };

    let waitToken = true;
    const MAX_ATTEMPTS = 5;
    let count = 0;
    while (waitToken) {
      const token = localStorage.getItem("wt_api_token");

      if (!token && count < MAX_ATTEMPTS) {
        count += 1;
        // eslint-disable-next-line
        await delayTime();
      } else {
        waitToken = false;
      }
    }
    const token = localStorage.getItem("wt_api_token");
    if (token) {
      getUserRole();
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    processGetUserRole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    role,
  };

  if (!role) {
    return (
      <>
        <span>Cargando....</span>
      </>
    );
  }

  return (
    <UserRoleContext.Provider value={value}>
      {children}
    </UserRoleContext.Provider>
  );
};
