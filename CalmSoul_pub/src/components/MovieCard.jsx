import { useNavigate } from "react-router-dom";

const MovieCard = ({ detail }) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => {
          navigate(`/videos/${detail.id}`);
        }}
        className="w-[40%] my-2"
      >
        <div className="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100 w-full">
          <span className="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 16a3 3 0 0 1 -3 3" />
              <path d="M16 16a3 3 0 0 0 3 3" />
              <path d="M12 16v4" />
              <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
            </svg>
          </span>
          <div className="flex flex-col flex-1">
            <h3 className="text-sm font-medium">{detail.videoName}</h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 shrink-0 flex-end"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </div>
      </button>
    </>
  );
};

export default MovieCard;
