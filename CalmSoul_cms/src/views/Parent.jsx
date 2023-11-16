import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Parent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Parent;
