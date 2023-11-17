import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const { data } = await axios.get("https://calm.bryanowen.tech/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      //   console.log(data);
      setVideos(data.videos);
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
      <section className="min-h-screen">
        <div className="flex flex-col items-center mt-10">
          <h1 className="relative mb-4 text-3xl font-black leading-tight text-[#4D77B4] sm:text-6xl xl:mb-8 bg-gradient-to-tl from-blue-400 to-neutral-400 bg-clip-text text-transparent ">
            Why do we meditate?
          </h1>
          <video
            width="600"
            height="450"
            controls
            autoPlay
            className="shadow-sm"
          >
            <source src="https://i.imgur.com/o61nEsB.mp4" type="video/mp4" />
          </video>
          {videos.map((video, id) => {
            return <MovieCard key={id} detail={video} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Videos;
