import { logout } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const logoutuser = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <button onClick={logoutuser}>Logout</button>
    </>
  );
};
