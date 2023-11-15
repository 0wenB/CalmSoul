import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const signup = () => {
    try {
      navigate("/register");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="min-h-screen">
        <div className="absolute top-[30%] left-[10%] z-20 text-white text-[2rem]">
          <h1>Choose</h1>
          <h1> Peace</h1>
          <button onClick={signup}>Sign Up</button>
        </div>
        {/* --------------NAVBAR ---------------------- */}
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse z-10"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="CalmSoul Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
                CalmSoul
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto bg-transparent"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className="z-10">
                  <Link
                    to="/login"
                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* --------------NAVBAR (end) ---------------------- */}
        {/* --------------DIV BACKGROUND ---------------------- */}
        <div className="opacity-80">
          <div
            className="h-screen bg-cover bg-no-repeat"
            style={{
              marginTop: "-56px",
              backgroundImage:
                'url("https://images.unsplash.com/photo-1589548234057-881a5d872453?q=80&w=1702&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
          ></div>
        </div>
        {/* --------------DIV BACKGROUND (END) ---------------------- */}
      </section>
    </>
  );
};

export default Home;
