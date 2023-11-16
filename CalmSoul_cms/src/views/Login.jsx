// import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "http://localhost:3000/login",
        userInput
      );
      // console.log(response);
      const token = response.data.access_token;
      localStorage.setItem("token", token);
      navigate("/videos");
    } catch (error) {
      setError(error.message);
    }
  };
  if (error) return <h1>{error}</h1>;
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1502325966718-85a90488dc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          opacity: "0.8",
        }}
      >
        <div
          className="bg-white p-8 rounded-lg shadow-lg mx-4 sm:mx-auto"
          style={{ maxWidth: "24rem" }}
        >
          <svg
            fill="#4D77B4"
            height="64px"
            width="64px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.999 511.999"
            xmlSpace="preserve"
            stroke="#4D77B4"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M511.792,185.489c-0.479-8.5-7.271-15.276-15.759-15.738c-1.503-0.095-32.88-1.669-72.68,6.033 c-7.922-38.771-21.195-66.659-22.279-68.886c-3.695-7.619-12.532-11.26-20.476-8.472c-1.447,0.5-31.629,11.109-65.848,33.737 c-22.466-33.2-45.815-54.23-47.687-55.887c-6.326-5.587-15.803-5.587-22.129,0c-1.864,1.651-25.009,22.479-47.379,55.415 c-33.934-22.31-63.717-32.775-65.144-33.271c-8-2.771-16.781,0.88-20.476,8.477c-1.085,2.232-14.398,30.211-22.315,69.08 c-40.248-7.912-72.134-6.312-73.655-6.226c-8.488,0.462-15.281,7.239-15.759,15.738c-0.272,4.875-5.859,120.185,64.679,189.87 c89.493,88.409,297.515,83.698,382.239-0.001C517.651,305.675,512.065,190.364,511.792,185.489z M128.957,293.915 c-24.792-59.103-4.131-128.494,7.021-157.998c11.018,4.935,27.194,13.062,44.396,24.486c-14.406,27.477-25.56,60.007-25.56,95.318 c0,42.314,15.95,80.707,34.421,111.071C165.489,348.876,141.901,324.794,128.957,293.915z M384.052,293.915 c-13.214,31.52-37.648,56.023-61.988,74.083c18.774-30.544,35.12-69.417,35.12-112.275c0.001-35.095-11.022-67.434-25.298-94.803 c17.441-11.65,33.967-19.967,45.178-24.997C388.248,165.366,408.931,234.594,384.052,293.915z" />{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>

          <h1 className="text-2xl font-semibold mb-4 text-[#4D77B4]">Login</h1>
          {/* {JSON.stringify(userInput)} */}
          <form onSubmit={onSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-500"
                placeholder="Enter your email"
                value={userInput.email}
                onChange={(event) => {
                  // console.log(event, "<<< event nih");
                  // console.log(event.target.value, "<<< value terbaru");
                  const newUserInput = {
                    email: event.target.value,
                    password: userInput.password,
                  };
                  setUserInput(newUserInput);
                }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-purple-500"
                placeholder="Enter your password"
                value={userInput.password}
                onChange={(event) => {
                  const newInput = {
                    email: userInput.email,
                    password: event.target.value,
                  };
                  setUserInput(newInput);
                }}
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-[#4D77B4] hover:bg-[#3968AC] text-white font-bold py-2 rounded-md"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
