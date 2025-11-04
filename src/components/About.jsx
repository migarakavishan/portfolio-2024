import React from "react";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const fileUrl =
    "https://drive.google.com/file/d/1hG_R39GKaXwf-kRjn-Ra0m53Y4Z_ZgUm/view?usp=sharing";

  return (
    <div
      name="about"
      className="relative bg-gradient-to-b from-gray-900 to-black w-full text-white overflow-hidden py-24 px-4"


    >
      {/* Floating Background Effects */}
      <div className="absolute top-10 left-0 w-40 h-40 bg-cyan-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative z-10">
        <div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="text-6xl font-bold flex justify-center mb-12">About</p>
        </div>

        <div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-6"
        >
          <p className="text-2xl text-gray-300">
            👋 Hello! Welcome to my portfolio.
          </p>

          <p className="text-gray-400">
            I'm <span className="text-cyan-400 font-semibold">Migara Kavishan</span>, 
            a dedicated <span className="font-semibold text-white">Flutter Mobile App Developer</span>. 
            I build high-quality mobile apps for both iOS and Android platforms, focusing on 
            <span className="text-cyan-400 font-semibold"> performance, design, and user experience</span>.
          </p>

          <div className="space-y-4">
            <p className="text-xl text-gray-300">📱 Mobile App Development:</p>
            <p className="text-gray-400">
              Hands-on experience developing robust and scalable apps using <span className="font-semibold text-white">Flutter & Dart</span>. 
              Skilled in API integration, Firebase, RESTful services, and secure backend communication.
            </p>

            <p className="text-xl text-gray-300">🧠 Problem Solving & Collaboration:</p>
            <p className="text-gray-400">
              I enjoy solving complex challenges and optimizing performance. Experienced collaborating in agile teams and contributing to both frontend and backend logic.
            </p>

            <p className="text-xl text-gray-300">🎨 UI/UX Design:</p>
            <p className="text-gray-400">
              I prioritize user experience, crafting intuitive, visually appealing interfaces. From wireframes to pixel-perfect implementation, I ensure smooth user journeys.
            </p>

            <p className="text-xl text-gray-300">🚀 My Goal:</p>
            <p className="text-gray-400">
              To continuously grow and contribute to innovative mobile solutions that make a real impact, transforming ideas into powerful digital experiences.
            </p>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center py-8">
            <a href={fileUrl} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px cyan" }}
                className="group text-white font-semibold w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer shadow-lg transition-all duration-300"
              >
                Resume
                <span className="group-hover:animate-bounce">
                  <MdDownload size={25} className="ml-2" />
                </span>
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
