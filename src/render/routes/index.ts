import { createBrowserRouter } from "react-router-dom";
import landingLayout from "../layouts/landing/Layout";
import indexLanding from "../pages/landing/indexLanding";
import App from "../pages/landing/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: landingLayout(),
    children: [
      {
        path: "indexLanding",
        element: indexLanding(),
      },
      {
        path: "App",
        element: App(),
      },
    ],
  },
]);

export { router };
