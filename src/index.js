import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers/Routers";

ReactDOM.render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>,

  document.getElementById("root")
);
