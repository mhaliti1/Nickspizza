import { Home } from "./pages/Home";
import { Login } from "./auth/Login";
import Register from "./auth/Register";
import Reset from "./auth/Reset";
import DrawerAppBar from "./Layout/layout";
import AdminLayout from "./Layout/adminlayout";

export const routesConfig = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Home />,
      },
    ],
  },
  {
    element: <DrawerAppBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
