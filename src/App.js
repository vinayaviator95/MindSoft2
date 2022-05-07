import React from "react";
import Home from "./components/pages/home/Home";
import Footer from "./components/common/Footer";
import HorizontalNavbar from "./components/common/HorizontalNavbar";
import Routes from "./Routers/Routers";
import { Helmet } from "react-helmet";
import { images } from "./assets/images/image";
const App = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/x-icon" href={images.companyfav} />
      </Helmet>
      <HorizontalNavbar />
      <Home />
      <Footer />;
    </>
  );
};
export default App;
