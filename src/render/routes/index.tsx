import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import LandingLogin from "../pages/landing/Login";
import DashboardIndex from "../pages/dashboard";
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
        element: <LandingLogin />,
      },
    ],
  },
  {
    path: "/dashboard",
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
        path: "/dashboard",
        element: <DashboardIndex />,
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
