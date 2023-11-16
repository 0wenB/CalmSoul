const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=5e70eac48ad142e6acb908267a50b6a0&response_type=code&redirect_uri=http://localhost:5173/audios&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function SpotifyLogin() {
  return (
    <div className="flex justify-center items-center">
      <a className="bg-blue-600" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  );
}
