import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div
      name="contact"
      className="relative bg-gradient-to-b from-gray-900 to-black w-full text-white overflow-hidden py-24 px-4"
    >
      <div className="max-w-screen-lg mx-auto text-white p-4">
        {/* Heading Section */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="pb-8 text-center"
        >
          <p className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent inline-block drop-shadow-lg">
            Contact
          </p>
          <p className="text-2xl mt-6 text-gray-400">
            Submit the form below to get in touch ✉️
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center items-center mt-12"
        >
          <motion.form
            action="https://getform.io/f/d637f13c-73e3-4e0d-8132-a9ce6ed51172"
            method="POST"
            className="flex flex-col w-full sm:w-2/3 md:w-1/2 bg-gradient-to-br from-gray-800/60 to-gray-900/70 p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-700"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-colors my-3"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-colors my-3"
              whileFocus={{ scale: 1.02 }}
            />

            <motion.textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
              className="p-3 bg-transparent border-2 border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-400 transition-colors my-3"
              whileFocus={{ scale: 1.02 }}
            ></motion.textarea>

            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="text-white font-semibold px-8 py-3 mt-6 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-800 hover:from-cyan-500 hover:to-blue-700 shadow-lg transition duration-300"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
