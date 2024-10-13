import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gradient-to-br from-sky-500 to-blue-700 text-white py-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <p className="text-lg guy">
        © {new Date().getFullYear()} Basedoggo. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
