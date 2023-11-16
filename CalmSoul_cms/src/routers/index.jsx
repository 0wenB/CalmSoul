import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../views/Login";
import Parent from "../views/Parent";

import ShowVideos from "../views/ShowVideos";
import AddVideo from "../views/AddVideo";
import EditVideo from "../views/EditVideo";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Login />,
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/videos");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <Login />,
    loader: async () => {
      if (localStorage.getItem("token")) {
        return redirect("/videos");
      }
      return null;
    },
  },
  {
    element: <Parent />,
    children: [
      {
        path: "/videos",
        element: <ShowVideos />,
      },
      {
        path: "/add-video",
        element: <AddVideo />,
      },
      {
        path: "/edit-video/:videoId",
        element: <EditVideo />,
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
