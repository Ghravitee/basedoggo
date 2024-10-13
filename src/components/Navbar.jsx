// import { motion } from 'framer-motion';
// import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';
// import { RiTwitterXFill } from "react-icons/ri";
// import { BiLogoTelegram } from "react-icons/bi";

const Navbar = () => {
  return (
    <header className="py-2 bg-bg-color flex justify-center items-center guy px-4 text-white">
      <nav className="flex flex-col gap-4 items center justify-center">
        <h1 className="text-[3rem] lg:text-[4rem] custom-heading drop-shadow-[10px_10px_4px_rgba(0,0,0,0.8)]">
          $Basedoggo
        </h1>
        <ul className="flex gap-4 items-center justify-center custom-paragraph">
          <li>
            <a href="#about" className=" text-[1.2rem] lg:text-[1.5rem]">
              About
            </a>
          </li>
          <li>
            <a href="#buy" className=" text-[1.2rem] lg:text-[1.5rem]">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="#buy" className=" text-[1.2rem] lg:text-[1.5rem]">
              How to buy
            </a>
          </li>
        </ul>
        {/* <div className="flex gap-4 items-center">
          <a
            href="#"
            className="hover:shadow-none transition duration-300 shadow-[-1px_2px_0px_2px_#000000] w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#e0af75] flex justify-center items-center "
          >
            <RiTwitterXFill size={25} />
          </a>
          <a
            href="#"
            className="hover:shadow-none transition duration-300 shadow-[-1px_2px_0px_2px_#000000] w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#e0af75] flex justify-center items-center"
          >
            <BiLogoTelegram size={25} />
          </a>
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
