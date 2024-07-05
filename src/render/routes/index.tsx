import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useNavigation,
} from 'react-router-dom';
import DashboardLayout from '../layouts/Dashboard/Layout';
import LandingLayout from '../layouts/Landing/Layout';
import DashboardIndex from '../pages/Dashboard';
import LandingLogin from '../pages/Landing/Login';

const router = createBrowserRouter([
  {
    path: '/',
    Component() {
      const navigation = useNavigation();
      return (
        <>
          {navigation.state !== 'idle' ? (
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
        path: '/',
        element: <LandingLogin />,
      },
    ],
  },
  {
    path: '/dashboard',
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
        path: '/dashboard',
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
