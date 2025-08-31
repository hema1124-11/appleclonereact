import { FaApple, FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-100/40 backdrop-blur sticky top-0 transition z-50">
      <ul className="flex items-center justify-between px-4 md:px-6 lg:px-12 text-sm p-[14px] font-lexend text-black">
        <li className="hover:text-gray-800 cursor-pointer transition text-xl text-center">
          <FaApple />
        </li>

        <div className="hidden md:flex items-center md:space-x-4 lg:space-x-9 md:text-xs lg:text-sm">
          <li className="hover:text-gray-800 cursor-pointer transition">
            Store
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">Mac</li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            iPad
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            iPhone
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            Watch
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            AirPods
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            TV & Home
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            Entertainment
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            Accessories
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition">
            Support
          </li>
        </div>

        <div className="flex items-center space-x-6">
          <li className="hover:text-gray-800 cursor-pointer transition text-sm text-center">
            <FaSearch />
          </li>
          <li className="hover:text-gray-800 cursor-pointer transition text-sm text-center">
            <FaShoppingBag />
          </li>

          <li className="md:hidden hover:text-gray-800 cursor-pointer transition text-sm text-center">
            <FaBars />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
