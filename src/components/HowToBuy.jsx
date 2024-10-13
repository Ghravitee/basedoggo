import { motion } from "framer-motion";

const Buy = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut", delay: 1 },
    },
  };

  return (
    <motion.div
      className="w-full flex items-center justify-center flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full flex flex-col justify-center items-center gap-[1rem] lg:px-30 xl:px-44 px-6 py-10">
        <motion.div className="mb-6" variants={containerVariants}>
          <h1 className="drop-shadow-[10px_10px_4px_rgba(0,0,0,0.8)] leading-normal uppercase text-[2rem] lg:text-[4rem] custom-heading font-black text-center">
            How to buy{" "}
            <span className="block text-[#FFFFFF] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem]">
              $BaseDoggo
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
        >
          {[1, 2, 3, 4].map((step) => (
            <motion.div
              key={step}
              className="bg-[#1D4ED8] px-4 py-6 pb-8 flex flex-col items-center justify-center border-4 border-b-8 border-black h-full rounded-lg"
              variants={cardVariants}
            >
              <div className="bg-[#2563EB] border-4 border-black px-4 py-4 flex flex-col gap-6 h-full rounded-md">
                <div className="-translate-y-10 bg-[#3B82F6] w-[40%] border-4 border-black mx-auto custom-heading flex justify-center items-center text-[2rem] text-white font-black rounded-full">
                  {step}
                </div>
                <p className="text-center text-lg md:text-2xl font-extrabold flex-1 custom-paragraph text-white">
                  {step === 1 && "Install Metamask and add base network"}
                  {step === 2 &&
                    "Fund your wallet with ETH, you can buy ETH from any exchange of your choice"}
                  {step === 3 &&
                    "Head to Uniswap, connect your wallet to the BASE network, paste the $Basedoggo contract address (listed above) into the 'Select token' field."}
                  {step === 4 && "Swap some BASE ETH for $Basedoggo."}
                </p>
                {step === 4 && (
                  <motion.button
                    className="mt-auto py-2 px-[3rem] text-[1rem] font-bold bg-[#60A5FA] text-white rounded-md"
                    variants={buttonVariants}
                  >
                    BUY NOW
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Buy;
