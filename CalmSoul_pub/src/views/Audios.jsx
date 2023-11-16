import SpotifyLogin from "../Spotify";
import Dashboard from "../components/Dashboard";
const Audios = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  return code ? <Dashboard code={code} /> : <SpotifyLogin />;
};
export default Audios;
