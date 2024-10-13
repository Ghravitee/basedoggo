import { motion } from "framer-motion";

const Tokenomics = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="w-full py-16 text-white">
      <motion.div
        className="container mx-auto px-6 lg:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-center text-4xl lg:text-6xl font-bold mb-10 custom-heading"
          variants={itemVariants}
        >
          Tokenomics
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div
            className="bg-[#1D4ED8] px-4 py-6 pb-8 flex flex-col items-center justify-center border-4 border-b-8 border-black h-full rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-4 custom-heading">
              Total Supply
            </h3>
            <p className="text-2xl custom-paragraph">
              1,000,000,000 $Basedoggo
            </p>
          </motion.div>

          <motion.div
            className="bg-[#1D4ED8] px-4 py-6 pb-8 flex flex-col items-center justify-center border-4 border-b-8 border-black h-full rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-4 custom-heading">
              Liquidity
            </h3>
            <p className="text-2xl custom-paragraph">Locked</p>
          </motion.div>

          <motion.div
            className="bg-[#1D4ED8] px-4 py-6 pb-8 flex flex-col items-center justify-center border-4 border-b-8 border-black h-full rounded-lg"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold mb-4 custom-heading">Tax</h3>
            <p className="text-2xl custom-paragraph">2% Buy Sell tax</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Tokenomics;
