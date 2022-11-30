import "./App.css";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./Layout/layout";
import { Login } from "./auth/Login";
import Register from "./auth/Register";
import Reset from "./auth/Reset";
import { Home } from "./pages/Home";
import { routesConfig } from "./routesconfig";

function App() {
  const routes = useRoutes(routesConfig);

  return routes;
}

export default App;
