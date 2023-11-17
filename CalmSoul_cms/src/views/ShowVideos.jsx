import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const ShowVideos = () => {
  const navigate = useNavigate();

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
      // console.log(data);
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
      <div className="text-[#4D77B4] flex justify-center pt-[2rem]">
        <Link to="/add-video" className="p-2 underline hover:text-indigo-500">
          Add Video
        </Link>
      </div>
      <section className="min-h-screen">
        <div className="flex pt-[3rem] justify-center items-center px-2">
          <div className="relative w-[70rem] overflow-x-auto shadow-md sm:rounded-lg ">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Video Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Video Link
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Video Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => {
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {video.id}
                        </th>
                        <td className="px-6 py-4">{video.videoName}</td>
                        <td className="px-6 py-4">{video.videoLink}</td>
                        <td className="px-6 py-4">{video.videoCategory}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => {
                              navigate(`/edit-video/${video.id}`);
                            }}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline pr-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={async (e) => {
                              try {
                                e.preventDefault();
                                const token = localStorage.getItem("token");
                                await axios.delete(
                                  `https://calm.bryanowen.tech/${video.id}`,
                                  {
                                    headers: {
                                      Authorization: `Bearer ${token}`,
                                    },
                                  }
                                );
                                fetchData();
                              } catch (error) {
                                setError(error.message);
                              }
                            }}
                            className="font-medium pt-2 text-red-600 dark:text-blue-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowVideos;
