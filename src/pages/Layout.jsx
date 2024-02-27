import React from "react";
import { Outlet } from "react-router-dom";
import Background from "./Background";
const Layout = () => {
  return (
    <Background>
      <div className="w-screen h-screen">
        <Outlet />
      </div>
    </Background>
  );
};

export default Layout;
