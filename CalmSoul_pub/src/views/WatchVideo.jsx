import { Link } from "react-router-dom";

const WatchVideo = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Link to="/videos" className="">
          Back
        </Link>
        <video className=" rounded-lg" controls>
          <source src="https://i.imgur.com/gC4cvrc.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};
export default WatchVideo;
