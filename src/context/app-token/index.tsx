import React from "react";
import getAppToken from "service/app-token";
import { AppTokenContext } from "./context";

type Props = {
  children: React.ReactNode;
};

export const AppTokenProvider = ({ children }: Props) => {
  const date = new Date();
  date.setHours(date.getHours() + 23);

  const getToken = async () => {
    const { data, success } = await getAppToken();

    if (success) {
      localStorage.setItem("wtm_tkn", JSON.stringify(data));
    }
  };

  const value = {
    getToken,
  };

  return (
    <AppTokenContext.Provider value={value}>
      {children}
    </AppTokenContext.Provider>
  );
};
