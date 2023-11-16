import { createBrowserRouter, redirect } from "react-router-dom";
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
    path: "*",
    element: <Home />,
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/main");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Home />,
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/main");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <Login />,
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/main");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <Register />,
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/main");
      }
      return null;
    },
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
    loader: async () => {
      if (!localStorage.getItem("token")) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
