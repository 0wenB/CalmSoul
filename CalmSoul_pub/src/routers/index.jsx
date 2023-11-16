import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Register from "../views/Register";
import Home from "../views/Home";
import Parent from "../views/Parent";
import Main from "../views/Main";
import Videos from "../views/Videos";
import WatchVideo from "../views/WatchVideo";
import Audios from "../views/Audios";

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
  {
    element: <Parent />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
      {
        path: "/videos",
        element: <Videos />,
      },
      {
        path: "/videos/:videoId",
        element: <WatchVideo />,
      },
      {
        path: "/audios",
        element: <Audios />,
      },
    ],
  },
]);

export default router;
