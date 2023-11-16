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
      const data = await axios.get(`http://localhost:3000/${videoId}`, {
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
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Link to="/videos" className="">
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
