import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BG from "./background-generator";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BG />
  </React.StrictMode>
);
