// import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import "./render/css/index.css";
import Index from "./render/routes";

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement!).render(
  // <React.StrictMode>
  <NextUIProvider>
    <ThemeProvider attribute="class" defaultTheme="light">
      <Index />
    </ThemeProvider>
  </NextUIProvider>
  // </React.StrictMode>
);
