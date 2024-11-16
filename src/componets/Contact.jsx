import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.4 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_rk1tuyi", // Replace with your EmailJS Service ID
        "template_rm26jbd", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "_gE4G0RSod7gMEDA0" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you for reaching out! I'll get back to you soon.");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("There was an error sending your message. Please try again later.");
        }
      );
  };

  // Animation variants for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 1.0 }}
      className="border-b border-neutral-900 p-8"
    >
      {/* Section Header */}
      <motion.h1
        className="my-20 text-center text-4xl"
        transition={{ duration: 1 }}
      >
        Contact <span className="text-neutral-500">Me</span>
      </motion.h1>

      {/* Social Icons */}
      <motion.div
        className="flex justify-center gap-6 mb-12 text-2xl text-cyan-500"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 0.2 }}
      >
        <motion.a
          href="tel:+9741721110"
          whileHover={{ scale: 1.2 }}
          aria-label="Phone"
        >
          <FaPhoneAlt />
        </motion.a>
        <motion.a
          href="https://github.com/VBK-2102"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          aria-label="GitHub"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/vaibhav-kalungada-844790223/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:vaibhavbkalungada@gmail.com"
          whileHover={{ scale: 1.2 }}
          aria-label="Email"
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          aria-label="Instagram"
        >
          <FaInstagram />
        </motion.a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ delay: 0.4 }}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-400 mb-1"
          >
            Name
          </label>
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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-400 mb-1"
          >
            Email
          </label>
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
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-400 mb-1"
          >
            Message
          </label>
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
          className="w-full rounded-lg bg-cyan-500 py-2 text-sm font-medium text-neutral-900 hover:bg-white-600 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Send Message
        </button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
