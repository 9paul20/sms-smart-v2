import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import Login from "../pages/landing/Login";
import Index from "../pages/dashboard";
import LandingLayout from "../layouts/landing/Layout";
import DashboardLayout from "../layouts/dashboard/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      let navigation = useNavigation();
      return (
        <>
          {navigation.state !== "idle" ? (
            <div className="is-loading">Loading...</div>
          ) : null}
          <LandingLayout>
            <Outlet />
          </LandingLayout>
        </>
      );
    },
    children: [
      {
        index: true,
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/Dashboard",
    Component() {
      return (
        <>
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        </>
      );
    },
    children: [
      {
        index: true,
        path: "/Dashboard",
        element: <Index />,
      },
    ],
  },
]);

function root() {
  return (
    <>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
        fallbackElement={<p>Loading...</p>}
      />
    </>
  );
}

export default root;
