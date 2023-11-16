import { useNavigate } from "react-router-dom";
// import SpotifyLogin from "../Spotify";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="min-h-screen">
        <div className="relative items-center justify-center w-full overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
          <div className="container flex flex-col items-center justify-between h-full max-w-6xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
            <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
              <h1 className="relative mb-4 text-3xl font-black leading-tight text-[#4D77B4] sm:text-6xl xl:mb-8 bg-gradient-to-tl from-blue-400 to-neutral-400 bg-clip-text text-transparent ">
                Mindfulness comes from Awareness
              </h1>
              <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
                Are you ready on your mindful journey?
              </p>
              <button
                onClick={() => {
                  navigate("/videos");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Watch Videos
              </button>
              {/* Integrates with section */}
            </div>
            <div className="relative z-50 flex flex-col items-end justify-center w-full h-full lg:w-1/2 ms:pl-10">
              <div className="container relative left-0 w-full max-w-4xl lg:absolute xl:max-w-6xl lg:w-screen">
                <video
                  className="w-full h-auto mt-20 mb-20 ml-0 lg:mt-24 xl:mt-40 lg:mb-0 lg:h-full lg:-ml-12"
                  controls
                  autoPlay
                >
                  <source
                    src="https://i.imgur.com/HLUkVEx.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Main;
