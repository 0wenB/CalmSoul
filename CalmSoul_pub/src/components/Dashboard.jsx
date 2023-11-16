import useAuth from "./SpotifyAuth";

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  return (
    <>
      <div>{code}</div>
    </>
  );
}
