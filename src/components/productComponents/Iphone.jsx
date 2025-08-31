import Buttoncombo from "../reusableComponents/Buttoncombo";

const Iphone = () => {
  return (
    <div className="h-[480px] sm:h-[520px] md:h-[550px] relative">
      <img
        src="./iphone.jpg"
        alt="iphone"
        className="w-full h-full object-cover object-center"
      />

      <div
        className="absolute top-8 sm:top-10 md:top-12 font-lexend left-1/2 -translate-x-1/2 
        flex items-center flex-col text-center px-3"
      >
        <h1 className="font-semibold text-[32px] sm:text-[36px] md:text-4xl">
          iPhone
        </h1>
        <p className="text-[16px] sm:text-lg md:text-xl mt-1 mb-3">
          The iPhone 16 family.
        </p>
        <Buttoncombo buttonName="Shop" />
      </div>

      <div className="absolute top-[170px] sm:top-[188px] md:top-48 lg:top-[195px] left-1/2 -translate-x-1/2">
        <h3 className="text-sm sm:text-base bg-gradient-to-r from-[#0090F7] via-[#F2416B] to-[#F55600] bg-clip-text text-transparent">
          Built for Apple Intelligence
        </h3>
      </div>
    </div>
  );
};

export default Iphone;
