import { useNavigate } from "react-router-dom";
// import SpotifyLogin from "../Spotify";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen">
        <button
          onClick={() => {
            navigate("/videos");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Video
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Audio
        </button>
        {/* <SpotifyLogin /> */}
      </section>
    </>
  );
};
export default Main;
