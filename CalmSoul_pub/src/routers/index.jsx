import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
