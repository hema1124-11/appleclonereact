import Buttoncombo from "./reusableComponents/Buttoncombo";

const Macbanner = () => {
  return (
    <section className="w-full mt-3 relative">
      <img
        src="./hero_3_max.jpg"
        alt="mac banner"
        className="w-full h-[70vh] sm:h-[75vh] md:h-[85vh] object-cover"
      />

      <div className="absolute top-8 sm:top-12 md:top-16 font-lexend left-1/2 -translate-x-1/2 flex items-center flex-col gap-[10px] sm:gap-3 text-center px-3">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          MacBook Air
        </h1>
        <div className="space-y-1 sm:space-y-2">
          <p className="text-lg sm:text-xl md:text-2xl">Sky blue colour.</p>
          <p className="text-base sm:text-xl md:text-2xl">
            Sky high performance with M4.
          </p>
        </div>
        <Buttoncombo buttonName={"Buy"} />
      </div>

      <div className="absolute bottom-10 sm:bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 text-center px-2">
        <h3 className="text-sm sm:text-base md:text-xl bg-gradient-to-r from-[#0090F7] via-[#BA62FC] to-[#F55600] bg-clip-text text-transparent font-medium">
          Built for Apple Intelligence
        </h3>
      </div>
    </section>
  );
};

export default Macbanner;
