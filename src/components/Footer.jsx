import Footerlegal from "./footerComponents/Footerlegal";
import Footernav from "./footerComponents/Footernav";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600">
      <Footerlegal />
      <Footernav />
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 text-[13px]">
        <p className="mb-3">
          More ways to shop:
          <span className="text-blue-600 underline"> Find an Apple Store </span>
          or
          <span className="text-blue-600 underline"> other retailer </span>
          near you. Or call
          <span className="text-blue-600 underline"> 000800 040 1966.</span>
        </p>
        <hr className="border-[0.5px] border-gray-300 mb-3" />

        <div className="flex flex-col md:flex-row justify-between gap-2 flex-wrap mb-2">
          <div className="flex flex-col md:flex-row md:items-center gap-3 flex-wrap">
            <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
            <p>
              Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map
            </p>
          </div>
          <p className="whitespace-nowrap">India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
