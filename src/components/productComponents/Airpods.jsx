import Buttoncombo from "../reusableComponents/Buttoncombo";

const Airpods = () => {
  return (
    <div className="h-[480px] sm:h-[520px] md:h-[550px] relative">
      <img
        src="./airpods.jpg"
        alt="AirPods"
        className="w-full h-full object-cover object-center"
      />

      <div
        className="absolute bottom-8 font-lexend left-1/2 -translate-x-1/2 
        flex flex-col items-center gap-3 text-center px-3"
      >
        <h1 className="font-semibold text-[30px] sm:text-[34px] md:text-4xl text-white">
          AirPods 4
        </h1>

        <div>
          <p className="text-[16px] sm:text-lg md:text-xl text-white">
            Iconic. Now supersonic.
          </p>
          <p className="text-[16px] sm:text-lg md:text-xl text-white">
            Available with Active Noise Cancellation. <sup>2</sup>
          </p>
        </div>

        <div className="scale-[0.90] sm:scale-[0.95] md:scale-100 transition-transform duration-300">
          <Buttoncombo buttonName={"Buy"} />
        </div>
      </div>
    </div>
  );
};

export default Airpods;
