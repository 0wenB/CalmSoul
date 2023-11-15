import router from "./routers";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <RouterProvider router={router} />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
