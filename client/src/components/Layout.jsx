import React from "react";
import { Navigbar } from "./Navigbar";
import { Weather } from "./Weather"

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Navigbar />
        <Weather />
        {children}
      </div>
    </React.Fragment>
  );
};
