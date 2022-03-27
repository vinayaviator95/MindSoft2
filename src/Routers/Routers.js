import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import AboutUs from "../components/pages/aboutUs/AboutUs";
import ContactUs from "../components/pages/contactUs/ContactUs";
import Services from "../components/pages/services/Services";
import Layout from "../layout/Layout";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/service" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default Routers;
