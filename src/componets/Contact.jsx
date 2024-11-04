import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const iconVariants = {
    hidden: { y: -20, opacity: 0 }, // Icons come from the top
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const formVariants = {
    hidden: { x: -100, opacity: 0 }, // Form comes from the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
  };

  return (
    <div className="border-b border-neutral-900 p-8">
      <motion.h1
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 1, delay: 0.2 }}
      className="my-20 text-center text-4xl">
        Contact<motion.span  
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} className="text-neutral-500"> Me</motion.span>
      </motion.h1>

      {/* Contact Icons */}
      <motion.div
        ref={ref}
        className="flex justify-center space-x-6 mb-8 text-2xl text-neutral-400"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {[
          {
            href: "tel:+9741721110",
            ariaLabel: "Phone",
            icon: <FaPhoneAlt />,
          },
          {
            href: "https://instagram.com/yourInstagramHandle",
            ariaLabel: "Instagram",
            icon: <FaInstagram size={20} />,
          },
          {
            href: "mailto:vaibhavbkalungada@gmail.com",
            ariaLabel: "Email",
            icon: <FaEnvelope />,
          },
          {
            href: "https://linkedin.com/in/vaibhav-kalungada-844790223/",
            ariaLabel: "LinkedIn",
            icon: <FaLinkedin />,
          },
          {
            href: "https://github.com/VBK-2102/",
            ariaLabel: "GitHub",
            icon: <FaGithub />,
          },
        ].map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className="hover:text-purple-500"
            variants={iconVariants} // Apply icon animation
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4"
        variants={formVariants} // Apply form animation
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full rounded-lg border border-neutral-800 bg-neutral-900 p-2 text-sm text-neutral-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-cyan-500 py-2 text-sm font-medium text-neutral-900 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
