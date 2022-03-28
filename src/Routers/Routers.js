import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import AboutUs from "../components/pages/aboutUs/AboutUs";
import ContactUs from "../components/pages/contactUs/ContactUs";
import Services from "../components/pages/services/Services";
import Layout from "../layout/Layout";
import Industry from "../components/pages/industry/Industry";
// import IndustryComponent from "../components/pages/industry/IndustryComponent";
// import Industry from "../components/pages/industry/Industry";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/industry" element={<Industry />} />
      </Route>
    </Routes>
  );
};

export default Routers;
