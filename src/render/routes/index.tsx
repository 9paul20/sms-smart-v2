import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import LandingLogin from "../pages/Landing/Login";
import DashboardIndex from "../pages/Dashboard";
import LandingLayout from "../layouts/Landing/Layout";
import DashboardLayout from "../layouts/Dashboard/Layout";

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

function Index() {
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

export default Index;
