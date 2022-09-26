import React from "react";
import { Navigbar } from "./Navigbar";
import { Weather } from "./Weather"
import { Categorynav } from "./Categorynav";

export const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Navigbar />
        <Weather />
        <Categorynav />
        {children}
      </div>
    </React.Fragment>
  );
};
