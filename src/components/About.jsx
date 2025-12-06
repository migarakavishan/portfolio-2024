import React from "react";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const About = () => {
  const fileUrl =
    "https://drive.google.com/file/d/1T2yizv6bemkRKTjQ_C6hcFcKX53yIBN5/view?usp=sharing";

  return (
    <motion.div
      name="about"
      className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 w-full text-white overflow-hidden py-24 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Floating background glows */}
      <motion.div
        className="absolute top-10 left-0 w-48 h-48 bg-cyan-700/20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-700/20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full relative z-10 space-y-8">
        {/* Title */}
        <motion.div
          custom={0.2}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            About
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.p
          custom={0.3}
          variants={fadeInUp}
          className="text-2xl text-gray-300 text-center"
        >
          👋 Hello! Welcome to my portfolio.
        </motion.p>

        <motion.p
          custom={0.4}
          variants={fadeInUp}
          className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto"
        >
          I'm{" "}
          <span className="text-cyan-400 font-semibold">Migara Kavishan</span>, a
          dedicated{" "}
          <span className="font-semibold text-white">
            Flutter Mobile App Developer
          </span>
          . I build high-quality mobile apps for both iOS and Android platforms,
          focusing on{" "}
          <span className="text-cyan-400 font-semibold">
            performance, design, and user experience
          </span>
          .
        </motion.p>

        {/* Details Sections */}
        <div className="space-y-8 mt-8">
          {[
            {
              title: "📱 Mobile App Development:",
              desc: "Hands-on experience developing robust and scalable apps using Flutter & Dart. Skilled in API integration, Firebase, RESTful services, and secure backend communication.",
            },
            {
              title: "🧠 Problem Solving & Collaboration:",
              desc: "I enjoy solving complex challenges and optimizing performance. Experienced collaborating in agile teams and contributing to both frontend and backend logic.",
            },
            {
              title: "🎨 UI/UX Design:",
              desc: "I prioritize user experience, crafting intuitive, visually appealing interfaces. From wireframes to pixel-perfect implementation, I ensure smooth user journeys.",
            },
            {
              title: "🚀 My Goal:",
              desc: "To continuously grow and contribute to innovative mobile solutions that make a real impact, transforming ideas into powerful digital experiences.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={0.5 + i * 0.15}
              variants={fadeInUp}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl text-gray-300 mb-1">{item.title}</p>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Resume Button */}
        <motion.div
          custom={1}
          variants={fadeInUp}
          className="flex justify-center py-10"
        >
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0 0 25px rgba(0, 255, 255, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group text-white font-semibold w-fit px-8 py-3 flex items-center rounded-lg bg-gradient-to-r from-cyan-700 to-blue-800 cursor-pointer shadow-lg transition-all duration-300"
            >
              Resume
              <motion.span
                className="ml-2"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                <MdDownload size={25} />
              </motion.span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
