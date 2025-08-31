import emojiPath from "../assets/svgPath";
import Button from "./reusableComponents/Button";

const Hero = () => {
  return (
    <div className="w-full mt-3 relative">
      <img
        src="./hero_1_max.jpg"
        alt="hero"
        className="w-full h-[75vh] sm:h-[80vh] md:h-[85vh] object-cover"
      />

      <div
        className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 
      bg-[#007AFF] text-[28px] sm:text-[34px] md:text-[42px] leading-[32px] sm:leading-[40px] md:leading-[48px] px-5 sm:px-6 md:px-7 py-3 sm:py-4
 text-white font-lexend font-semibold rounded-3xl
      "
      >
        Buy Mac <br /> or iPad <br /> for college
        <div className="absolute top-[-13px] right-[-80px] flex flex-col items-end">
          <img
            src="./ipad_sticker.png"
            alt="iPad Sticker"
            className="w-[90px] sm:w-[120px] md:w-[140px] rotate-[-2deg] drop-shadow-lg -mt-2 z-10"
          />
          <img
            src="./mac_sticker.png"
            alt="Mac Sticker"
            className="w-[50px] sm:w-[65px] md:w-[80px] 
      absolute top-[60px] sm:top-[70px] md:top-[78px] 
      -left-3 sm:left-6 md:left-7 rotate-[-2deg] drop-shadow-lg"
          />
        </div>
      </div>

      <div className="absolute top-[44%] md:top-[46%] lg:top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] md:w-[300px] h-[32px] sm:h-[40px] md:h-[44px]">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 614 94"
          preserveAspectRatio="none"
        >
          <path
            fill="#007AFF"
            d="M598.708,68.2V46.847l-0.009.007A44.66,44.66,0,0,0,554.255,2.041L45.484,1.957a44.85,44.85,0,0,0-.052,89.7L554.2,91.739a44.091,44.091,0,0,0,29.025-10.847c0.054,0.063.1,0.127,0.157,0.192,13.2,15.237,27.881,9.657,27.881,9.657C603.816,89.025,598.708,78.722,598.708,68.2Z"
          />

          <foreignObject x="0" y="0" width="100%" height="100%">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className="flex justify-center items-center w-full h-full"
            >
              <p className="text-[45px] sm:text-[40px] md:text-[40px] lg:text-[40px] font-bold text-white font-lexend m-0 p-1 sm:p-2">
                with education savings*
              </p>
            </div>
          </foreignObject>
        </svg>
      </div>

      <div className="absolute top-[63%] md:top-[68%]  left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] md:w-[280px] h-[160px] sm:h-[180px] md:h-[200px]">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 628 480"
          preserveAspectRatio="xMidYMid meet"
        >
          <path fill="rgb(0,122,255)" d={emojiPath} />
        </svg>

        <div className="absolute top-0 left-[30px] w-full h-full flex flex-col items-center justify-center">
          <img
            src="./emoji.png"
            alt="emoji"
            className="w-[50px] h-auto absolute -left-12 -top-3 sm:-left-10"
          />

          <div className="text-white font-bold font-lexend text-[30px] sm:text-[32px] md:text-[38px] lg:text-[38px]  leading-[30px] sm:leading-[34px] md:leading-[38px]">
            Choose <br /> AirPods or <br /> an eligible accessory
            <sup style={{ fontSize: "20px" }}>1</sup>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Button
          buttonName={"Shop"}
          className=" bg-white  px-5 py-2 rounded-3xl bg-transparent border border-[#007AFF] text-[#007AFF] hover:text-white hover:bg-[#007AFF]"
        />
      </div>
    </div>
  );
};

export default Hero;
