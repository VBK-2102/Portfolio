import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROJECTS } from "../constants";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 }, // Image comes from the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 }, // Text comes from the right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="border-b border-neutral-900 p-4">
      <motion.h1  initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }} className="my-20 text-center text-4xl">Projects</motion.h1>
      <motion.div
        ref={ref}
        className="flex flex-col items-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-col lg:flex-row items-center lg:justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="w-full lg:w-1/4 flex justify-center"
              variants={imageVariants} // Apply image animation
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4 flex flex-col items-start lg:items-start text-center lg:text-left"
              variants={textVariants} // Apply text animation
            >
              <h2 className="mb-2 font-semibold">{project.title}</h2>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap mb-2 justify-center lg:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900 inline-block hover:underline mt-2"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
