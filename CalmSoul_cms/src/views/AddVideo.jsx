import ReusableButton from "../components/ReusableButton";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    videoName: "",
    videoCategory: "",
  });

  const fileInputOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const postData = async (event) => {
    try {
      event.preventDefault();
      const token = localStorage.getItem("token");

      //bagian video upload
      const formData = new FormData();
      formData.append("video", file);
      formData.append("name", userInput.videoName);
      formData.append("description", userInput.videoCategory);
      // console.log(formData);
      const response = await axios.post(
        "https://api.imgur.com/3/upload",
        formData,
        {
          headers: {
            Authorization: `Bearer e1820abc5af6783923dcb041518529c86aed13bc`,
            "Content-Type": "multipart/form-data;",
          },
        }
      );
      // console.log(response);

      await axios.post(
        "https://calm.bryanowen.tech/add",
        { ...userInput, videoLink: response.data.data.link },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      navigate("/videos");
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) return <h1>{error}</h1>;
  return (
    <>
      {/* {JSON.stringify(userInput)} */}

      <div
        className="relative min-h-screen flex items-center justify-center bg-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1502325966718-85a90488dc29?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
        <form
          className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10"
          onSubmit={postData}
        >
          <div className="grid  gap-8 grid-cols-1">
            <div className="flex flex-col ">
              <div className="flex flex-col sm:flex-row items-center py-2">
                <div className="w-full sm:w-auto sm:ml-auto mt-1 sm:mt-0" />
              </div>
              <div className="">
                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <main className="flex items-center justify-center bg-gray-100 font-sans">
                      <label
                        htmlFor="dropzone-file"
                        className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-10 w-10 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">
                          Upload Video File
                        </h2>
                        <p className="mt-2 text-gray-500 tracking-wide">
                          Format accepted: MP4. Double click to upload.
                        </p>
                        <input
                          id="dropzone-file"
                          type="file"
                          name="videoLink"
                          className="hidden"
                          onChange={fileInputOnChange}
                        />
                      </label>
                    </main>
                  </div>
                </div>

                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className=" font-semibold text-gray-600 py-2">
                    Video Name <abbr title="required">*</abbr>
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                      placeholder="https://"
                      name="videoName"
                      id="integration_shop_name"
                      value={userInput.videoName}
                      onChange={(event) => {
                        const newInput = {
                          videoName: event.target.value,
                          videoCategory: userInput.videoCategory,
                        };
                        setUserInput(newInput);
                      }}
                    />
                  </div>

                  <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                    <div className="mb-3 space-y-2 w-full text-xs">
                      <label className="font-semibold text-gray-600 py-2">
                        Video Category <abbr title="required">*</abbr>
                      </label>
                      <input
                        placeholder="--Video Category--"
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                        required="required"
                        type="text"
                        name="videoCategory"
                        id="integration_shop_name"
                        value={userInput.videoCategory}
                        onChange={(event) => {
                          const newInput = {
                            videoName: userInput.videoName,
                            videoCategory: event.target.value,
                          };
                          setUserInput(newInput);
                        }}
                      />
                      <p className="text-red text-xs hidden">
                        Please fill out this field.
                      </p>
                    </div>
                  </div>

                  <ReusableButton />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddVideo;
