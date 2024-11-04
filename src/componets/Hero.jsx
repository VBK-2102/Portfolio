import React from 'react';
import { HERO_CONTENT } from "../constants"; 
import profilePic from "../assets/vbk2.gif";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 min-h-screen flex items-center p-4">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)} 
              initial="hidden"
              animate="visible"
              className="p-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Vaibhav Kalungada
            </motion.h1>
            <motion.span 
              variants={container(0.2)} 
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent pl-20"
            >
              Data Scientist
            </motion.span>
            <motion.p 
              variants={container(0.4)} 
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter pl-20"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900 to-black opacity-50 blur-lg"></div>
            <motion.img  
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} 
              alt="Vaibhav Kalungada" 
              className="h-80 w-80 rounded-full bg-gradient-to-r from-purple-900 to-black shadow-lg filter brightness-50" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
