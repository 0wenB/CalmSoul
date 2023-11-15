import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
