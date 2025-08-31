import Button from "../reusableComponents/Button";
import { FaApple } from "react-icons/fa";

const Trade = () => {
  return (
    <div className="h-[480px] sm:h-[520px] md:h-[550px] relative">
      <img
        src="./tradein.jpg"
        alt="Trade In"
        className="w-full h-full object-cover object-center"
      />

      <div
        className="absolute top-10 sm:top-11 md:top-14 left-1/2 -translate-x-1/2 
        font-lexend flex flex-col items-center gap-3 text-center px-3"
      >
        <div className="flex items-center gap-1">
          <FaApple className="text-[28px] sm:text-[32px] md:text-4xl text-black" />
          <h1 className="font-semibold text-[32px] sm:text-[36px] md:text-4xl text-black">
            Trade In
          </h1>
        </div>

        <p className="text-[16px] sm:text-lg md:text-xl text-black">
          Upgrade and save. It’s that easy.
        </p>

        <div className="scale-[0.90] sm:scale-[0.95] md:scale-100 transition-transform duration-300">
          <Button
            buttonName="Get your estimate"
            className="px-5 py-2 rounded-3xl bg-[#007AFF] text-white text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default Trade;
