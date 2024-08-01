import React, { createContext, useState } from "react";

export const BreadcrumbsContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const BreadcrumbsProvider = ({ children }: Props) => {
  const [breadcrumbs, setBreadcrumbs] = useState({
    view: "",
    message: "",
    href: "",
    labels: [],
    title: "",
  });

  const updateBreadcrumbs = (data: any) => {
    setBreadcrumbs(data);
  };

  return (
    <BreadcrumbsContext.Provider
      value={{
        breadcrumbs,
        updateBreadcrumbs,
      }}
    >
      {children}
    </BreadcrumbsContext.Provider>
  );
};
