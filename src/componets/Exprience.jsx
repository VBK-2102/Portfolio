import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const yearVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const detailsVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="border-b border-neutral-900 pb-4 min-h-screen flex flex-col justify-center items-center">
      <motion.h1 
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>
      <motion.div
        ref={ref}
        className="my-20 flex flex-col items-center gap-8 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            className="flex w-full items-center gap-8"
          >
            <motion.div
              className="w-1/4 text-center"
              variants={yearVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p className="mb-2 pd-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              className="w-3/4 max-w-xl"
              variants={detailsVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
