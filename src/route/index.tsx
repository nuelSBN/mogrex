import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Admin from "../layout/admin";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Dashboard from "../modules/Dashboard";
import Tables from "../modules/Tables";
import NotFoundPage from "../components/404";

function MainLayout({ children }: any) {
  return <div className="h-dvh w-full">{children ? children : <Outlet />}</div>;
}

export default function Modules() {
  const server = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Admin />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "tables",
              element: <Tables />,
            },
          ],
        },

        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={server} />;
}
