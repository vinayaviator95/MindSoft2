import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import HorizontalNavbar from "../components/common/HorizontalNavbar";

const Layout = () => {
  return (
    <div>
      <HorizontalNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
