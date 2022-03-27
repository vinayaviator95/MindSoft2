import React from "react";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/Footer";
import HorizontalNavbar from "./components/common/HorizontalNavbar";
import Routes from "./Routers/Routers";

const App = () => {
  return (
    <>
      <HorizontalNavbar />
      <Home />
      <Footer />;
    </>
  );
};
export default App;
