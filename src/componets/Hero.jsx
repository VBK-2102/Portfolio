import React from 'react';
import { HERO_CONTENT } from "../constants"; 
import profilePic from "../assets/vbk2.gif";
import { motion } from "framer-motion";
import ResumeDownloader from './ResumeDownloader'; // Import the ResumeDownloader component
import MusicPlayer from './MusicPlayer'; // Import the MusicPlayer component

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
            {/* Music player placed above the name */}
            <MusicPlayer /> {/* Music player added here */}
            
            <motion.h1 
              variants={container(0)} 
              initial="hidden"
              animate="visible"
              className="p-16 text-6xl font-thin tracking-tight lg:mt-4 lg:text-6xl"
            >
              Vaibhav Kalungada
            </motion.h1>
            <motion.p 
              variants={container(0.4)} 
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter pl-20"
            >
              {HERO_CONTENT}
            </motion.p>
            {/* Resume downloader button added below HERO_CONTENT */}
            <motion.div 
              variants={container(0.6)} 
              initial="hidden"
              animate="visible"
              className="mt-4 pl-20"
            >
              <ResumeDownloader /> {/* Button for downloading resume */}
            </motion.div>
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
