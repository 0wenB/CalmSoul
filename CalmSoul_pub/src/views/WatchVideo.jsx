import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const WatchVideo = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const data = await axios.get(`https://calm.bryanowen.tech/${videoId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(data);
      setVideo(data.data.video);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center mt-[-2rem]">
        <h1 className="relative mb-4 text-3xl font-black leading-tight text-[#4D77B4] sm:text-6xl xl:mb-8 bg-gradient-to-tl from-blue-400 to-neutral-400 bg-clip-text text-transparent ">
          {video.videoName}
        </h1>
        <Link
          to="/videos"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4"
        >
          Back
        </Link>
        <video className=" rounded-lg" controls>
          <source src={video.videoLink} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
    </>
  );
};
export default WatchVideo;
