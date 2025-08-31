const ButtonTv = ({ buttonName, genreName, desc }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-2 sm:gap-4 lg:gap-6 font-lexend text-center sm:text-left lg:px-3">
      <button className="bg-white text-black px-3 py-1 text-xs sm:text-sm md:text-base lg:text-base sm:px-4 md:px-5 lg:px-6 sm:py-1.5 md:py-2 lg:py-2 rounded-3xl font-semibold whitespace-nowrap">
        {buttonName}
      </button>

      <div className="flex flex-col sm:flex-col md:flex-row md:items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
        <h1 className="font-bold text-sm sm:text-base md:text-xl lg:text-2xl leading-tight">
          {genreName}
        </h1>
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl leading-tight">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ButtonTv;
