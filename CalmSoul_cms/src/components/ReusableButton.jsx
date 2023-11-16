const ReusableButton = () => {
  return (
    <>
      <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
        <button
          type="submit"
          className="mb-2 md:mb-0 bg-[#F46956] px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ReusableButton;
