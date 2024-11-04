import React from "react";
import logo from "../assets/download.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between h-16 py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-40" src={logo} alt="logo" />
      </div>
      <div className="flex space-x-4 w-20">
      <a
          href="https://linkedin.com/in/vaibhav-kalungada-844790223/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-purple-500"
        >
          <FaLinkedin size={20}/>
        </a>
        <a
          href="https://github.com/VBK-2102/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-purple-500"
        >
          <FaGithub size={20} />
        </a>
        <a href="https://instagram.com/yourInstagramHandle" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500">
        <FaInstagram size={20}/>
      </a>
      </div>
    </nav>
  );
};

export default Navbar;
