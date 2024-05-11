import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import "./render/css/index.css";
import Router from "./render/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <Router />
    </NextUIProvider>
  </React.StrictMode>
);
