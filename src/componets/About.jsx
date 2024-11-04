import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const containerVariant = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <div className="border-b border-neutral-900 min-h-screen flex items-center pb-4">
      <div ref={ref} className="w-full">
        <motion.h1 initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl">
          About <motion.span  variants={containerVariant(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} className="text-neutral-500">Me</motion.span>
        </motion.h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <img
                className="h-80 w-80 rounded-2xl shadow-lg filter brightness-50"
                src={aboutImg}
                alt="about"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={containerVariant(0.4)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex justify-center lg:justify-start"
            >
              <p className="my-2 max-w-xl py-6 text-lg">
                {ABOUT_TEXT}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
