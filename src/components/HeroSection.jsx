import { motion } from "framer-motion";
import twitter from "../assets/twitter-logo.svg";
import telegram from "../assets/telegram-logo.svg";
import dexscreener from "../assets/dexscreener-logo.svg";
import basescan from "../assets/basescan-logo.svg";
import doggo from "../assets/doggo.png";
import InfiniteScroll from "./InfiniteScroll";

const HeroSection = () => {
  // Variants for animations
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1 },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 1.5 },
    },
  };

  const contractBoxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 2 },
    },
  };

  return (
    <main className="relative">
      <div className="max-w-[65rem] mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 justify-center items-center lg:items-start">
          <motion.img
            src={doggo}
            alt="Doggo"
            className=""
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          />
          <div className="">
            <motion.h2
              className="text-[2.5rem] lg:text-[3rem] mb-8 text-white text-center leading-10 custom-heading drop-shadow-[10px_10px_4px_rgba(0,0,0,0.8)]"
              initial="hidden"
              animate="visible"
              variants={headingVariants}
            >
              You with <br /> Basedoggo?
            </motion.h2>

            <div className="flex justify-center items-center flex-col px-4">
              <motion.a
                href="#_"
                className="relative inline-block px-8 py-4 font-medium group mb-10"
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
              >
                <span className="absolute inset-0 w-full h-full rounded-lg transition duration-200 ease-out transform translate-x-[6px] translate-y-[6px] bg-[#1D4ED8] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 rounded-lg border-[#1D4ED8] group-hover"></span>
                <span className="relative text-[#1D4ED8] group-hover:text-[#1D4ED8] text-2xl custom-paragraph">
                  Buy Now
                </span>
              </motion.a>
              <div className="grid grid-cols-2 lg:w-[30%] gap-6">
                {[twitter, telegram, dexscreener, basescan].map(
                  (icon, index) => (
                    <motion.a
                      href="#"
                      key={index}
                      className="border-4 bg-white flex items-center overflow-hidden justify-center sm:w-[70px] sm:h-[70px] rounded-full"
                      initial="hidden"
                      animate="visible"
                      variants={socialIconVariants}
                      whileHover={{ scale: 1.1 }}
                    >
                      <img src={icon} alt="social" width={50} height={50} />
                    </motion.a>
                  )
                )}
              </div>
              <motion.div
                className="bg-white px-4 py-2 mt-6 border-2 rounded-lg border-[#1D4ED8]"
                initial="hidden"
                animate="visible"
                variants={contractBoxVariants}
              >
                <p className="text-[#2563EB] text-lg break-all custom-paragraph">
                  Ca: To be Announced
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <InfiniteScroll />
    </main>
  );
};

export default HeroSection;
