import React from "react";
import { Navigbar } from "./Navigbar";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Navigbar />
        {children}
      </div>
    </React.Fragment>
  );
};
