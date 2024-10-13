import { motion } from "framer-motion";
import doggoGlasses from "../assets/doggo-glasses.png";

function About() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[80rem] px-6">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="lg:w-1/2 lg:pl-10 custom-paragraph">
            <motion.h2
              className="drop-shadow-[10px_10px_4px_rgba(0,0,0,0.8)] uppercase text-[2rem] lg:text-[4rem] custom-heading font-black mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About
            </motion.h2>
            <motion.p
              className="text-[1.5rem] mb-4 "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Basedoggo is the newest meme coin taking over the crypto space.
              With its cute and fun-loving vibe, it has already started to win
              the hearts of the community.
            </motion.p>
            <motion.p
              className="text-[1.5rem]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              At the heart of BaseDoggo is a commitment to our pack—every holder
              is a part of the family, benefiting from a fair and transparent
              system that rewards loyalty. <br />
              Whether you&apos;re a seasoned crypto enthusiast or a curious
              newcomer, BaseDoggo offers an accessible and exciting way to be a
              part of the crypto revolution. Join the BaseDoggo community today,
              and let&apos;s grow together with the best dog-themed coin in the
              market. We&apos;re here to fetch your profits and take you to the
              moon!
            </motion.p>
          </div>
          <motion.img
            src={doggoGlasses}
            alt="BaseDoggo"
            className="w-full lg:w-[40%] mb-10 lg:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
