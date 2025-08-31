import Buttoncombo from "../reusableComponents/Buttoncombo";

const Ipad = () => {
  return (
    <div className="h-[480px] sm:h-[520px] md:h-[550px] relative">
      <img
        src="./ipad_air.jpg"
        alt="ipad"
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute top-6 sm:top-8 md:top-10 font-lexend left-1/2 -translate-x-1/2 flex items-center flex-col text-center px-3">
        <div className="flex gap-2 items-center">
          <h1 className="font-semibold text-[28px] sm:text-[36px] md:text-[40px]">
            iPad
          </h1>
          <img
            src="./Ipad_air_sticker.png"
            alt="Ipad Air"
            className="w-[36px] sm:w-[42px] md:w-auto"
          />
        </div>

        <p className="text-[16px] sm:text-lg md:text-[18px] mt-2 mb-2">
          Supercharged by the <b>M3</b>.
        </p>

        <div className="scale-[0.85] sm:scale-[0.95] md:scale-100">
          <Buttoncombo buttonName={"Buy"} />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <h3 className="text-xs sm:text-sm md:text-base bg-gradient-to-r from-[#0090F7] via-[#F2416B] to-[#F55600] bg-clip-text text-transparent">
          Built for Apple Intelligence
        </h3>
      </div>
    </div>
  );
};

export default Ipad;
