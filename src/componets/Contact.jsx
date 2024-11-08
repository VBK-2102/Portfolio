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
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

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
          from_email: formData.email,  // Ensure this is included
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

  return (
    <div className="border-b border-neutral-900 p-8">
      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Contact
        <motion.span
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-neutral-500"
        >
          {" "}
          Me
        </motion.span>
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4"
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
          className="w-full rounded-lg bg-cyan-500 py-2 text-sm font-medium text-neutral-900 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
