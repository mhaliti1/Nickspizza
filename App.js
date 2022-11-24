import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Common/Layout";
import Login from "./Common/Auth/Login";
import Register from "./Common/Auth/Register";
import Reset from "./Common/Auth/Reset";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./Pages/Admin";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<AddProduct />} />
      </Routes>
    </Layout>
  );
}

export default App;
