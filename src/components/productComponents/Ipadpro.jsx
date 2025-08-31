import Buttoncombo from "../reusableComponents/Buttoncombo";

const Ipadpro = () => {
  return (
    <div className="h-[480px] sm:h-[520px] md:h-[550px] relative">
      <img
        src="./ipad_pro.jpg"
        alt="iPad Pro"
        className="w-full h-full object-cover object-center"
      />

      {/* Centered Text and CTA */}
      <div
        className="absolute top-10 sm:top-12 md:top-14 font-lexend 
        left-1/2 -translate-x-1/2 flex flex-col items-center text-center gap-3 px-3"
      >
        <h1 className="font-semibold text-[30px] sm:text-[34px] md:text-4xl text-white">
          iPad Pro
        </h1>
        <p className="text-[16px] sm:text-lg md:text-xl text-white">
          Thin. Powerful. Pro.
        </p>

        <div className="scale-[0.90] sm:scale-[0.95] md:scale-100 transition-transform duration-300">
          <Buttoncombo buttonName="Buy" />
        </div>
      </div>

      {/* Tagline */}
      <div className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2">
        <h3 className="text-sm sm:text-base bg-gradient-to-r from-[#0090F7] via-[#F2416B] to-[#F55600] bg-clip-text text-transparent">
          Built for Apple Intelligence
        </h3>
      </div>
    </div>
  );
};

export default Ipadpro;
