import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiPython, SiPytorch, SiFlask, SiMysql } from "react-icons/si";
import { FaChartBar } from "react-icons/fa";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="border-b border-neutral-800 min-h-screen flex flex-col justify-center items-center p-24">
      <motion.h1 initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
       className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
        ref={ref}
        className="flex flex-wrap items-center justify-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlask className="text-7xl text-gray-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMysql className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaChartBar className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div variants={iconVariants} className="rounded-2xl border-4 border-neutral-800 p-4">
          <GiArtificialIntelligence className="text-7xl text-indigo-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
