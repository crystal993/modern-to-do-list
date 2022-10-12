import React from "react";
import { Outlet } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";

const GlobalLayout = () => {
  return (
    <>
      <GlobalHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default GlobalLayout;
