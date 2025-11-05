import React from "react";
import { motion } from "framer-motion";

// 🧠 Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// 🖼️ Assets
import aiimage from "../assets/aiImage.png";
import bootstrapimage from "../assets/bootstrapImage.png";
import cssimage from "../assets/cssimage.png";
import dartImage from "../assets/dartImage.png";
import figmaimage from "../assets/figmaImage.png";
import firebaseImage from "../assets/firebaseImage.webp";
import flutterImage from "../assets/flutterImage.png";
import githubimage from "../assets/githubImage.png";
import htmlimage from "../assets/html.png";
import jsimage from "../assets/jsImage.png";
import phpimage from "../assets/phpImage.png";
import psimage from "../assets/psImage.png";
import reactimage from "../assets/reactImage.png";
import tailwindimage from "../assets/tailwindImage.png";
import xdimage from "../assets/xdImage.png";
import vscodeimage from "../assets/vscodelogo.webp";
import androidstudioimage from "../assets/androidstudio.png";
import xcodeimage from "../assets/xcode.png";
import postmanimage from "../assets/postman.svg";
import azureimage from "../assets/azure.webp";
import dotnetimage from "../assets/dotnet.png";

const Experience = () => {
  const techStack = [
    { image: flutterImage, title: "Flutter" },
    { image: dartImage, title: "Dart" },
    { image: firebaseImage, title: "Firebase" },
    { image: dotnetimage, title: ".NET" },
    { image: reactimage, title: "React" },
    { image: jsimage, title: "JavaScript" },
    { image: htmlimage, title: "HTML" },
    { image: cssimage, title: "CSS" },
    { image: tailwindimage, title: "Tailwind CSS" },
    { image: bootstrapimage, title: "Bootstrap" },
    { image: phpimage, title: "PHP" },
    { image: githubimage, title: "GitHub" },
  ];

  const tools = [
    { image: vscodeimage, title: "VS Code" },
    { image: androidstudioimage, title: "Android Studio" },
    { image: xcodeimage, title: "Xcode" },
    { image: postmanimage, title: "Postman" },
    { image: azureimage, title: "Azure DevOps" },
    { image: figmaimage, title: "Figma" },
    { image: aiimage, title: "Illustrator" },
    { image: psimage, title: "Photoshop" },
    { image: xdimage, title: "Adobe XD" },
  ];

  return (
    <motion.div
      name="experience"
      className="relative bg-gradient-to-t from-gray-900 via-black to-gray-950 w-full text-white overflow-hidden py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <motion.div
        className="max-w-screen-lg mx-auto"
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          variants={fadeInUp}
        >
          <p className="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Experience
          </p>
          <p className="text-xl mt-6 text-gray-400">
            Technologies and tools I’ve worked with
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {techStack.map(({ image, title }) => (
            <motion.div
              key={title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl py-6 rounded-xl flex flex-col items-center hover:shadow-2xl hover:border-blue-500 hover:bg-gray-800 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.08, rotate: 1 }}
            >
              <motion.img
                src={image}
                alt={title}
                className="w-20 h-20"
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.6 } }}
              />
              <p className="text-gray-300 mt-4 font-medium">{title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Software Tools */}
        <motion.div
          className="mt-20 mb-12 text-center"
          variants={fadeInUp}
        >
          <p className="text-xl text-gray-400">Software tools I’ve worked with</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8"
          variants={staggerContainer}
        >
          {tools.map(({ image, title }) => (
            <motion.div
              key={title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-xl py-6 rounded-xl flex flex-col items-center hover:shadow-2xl hover:border-purple-500 hover:bg-gray-800 transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ scale: 1.08, rotate: 1 }}
            >
              <motion.img
                src={image}
                alt={title}
                className="w-20 h-20"
                whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.6 } }}
              />
              <p className="text-gray-300 mt-4 font-medium">{title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
