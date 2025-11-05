import React from "react";
import { motion } from "framer-motion";

// ✨ Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

const Qualification = () => {
  return (
    <motion.div
      name="qualification"
      className="relative bg-gradient-to-b from-gray-900 via-black to-gray-950 w-full text-white overflow-hidden py-24 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Floating Background Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 bg-cyan-700/20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl animate-pulse"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Content Container */}
      <div className="max-w-screen-lg mx-auto relative z-10">
        {/* Header */}
        <motion.div
          custom={0.2}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Qualification
          </h2>
          <p className="text-xl text-gray-400 mt-4">
            My educational background & work experience
          </p>
        </motion.div>

        {/* 🎓 Education Section */}
        <motion.div
          custom={0.3}
          variants={fadeInUp}
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-300">
            🎓 Education
          </h3>

          <div className="flex justify-center">
            <motion.ol
              variants={fadeInUp}
              custom={0.4}
              className="border-l border-gray-700 space-y-6"
            >
              {/* Higher Diploma */}
              <motion.li variants={fadeInUp} custom={0.5}>
                <div className="flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[10px] w-[10px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.6)]"></div>
                  <p className="text-sm text-gray-400">
                    2021 - 2023 (Completed)
                  </p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Higher Diploma in Information Technology
                  </h4>
                  <p className="text-gray-400">SLIIT CITY UNI</p>
                </div>
              </motion.li>

              {/* Degree */}
              <motion.li variants={fadeInUp} custom={0.6}>
                <div className="flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[10px] w-[10px] rounded-full bg-blue-400 shadow-[0_0_10px_rgba(0,150,255,0.6)]"></div>
                  <p className="text-sm text-gray-400">2024 (Completed)</p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    B.Sc. (Hons) Computer Science & Software Engineering
                  </h4>
                  <p className="text-gray-400">
                    University of Bedfordshire (SLIIT CITY UNI)
                  </p>
                </div>
              </motion.li>
            </motion.ol>
          </div>
        </motion.div>

        {/* 💼 Work Experience Section */}
        <motion.div
          custom={0.7}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-300">
            💼 Work Experience
          </h3>

          <div className="flex justify-center">
            <motion.ol
              variants={fadeInUp}
              custom={0.8}
              className="border-l border-gray-700 space-y-6"
            >
              <motion.li variants={fadeInUp} custom={0.9}>
                <div className="flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[10px] w-[10px] rounded-full bg-purple-400 shadow-[0_0_10px_rgba(200,100,255,0.6)]"></div>
                  <p className="text-sm text-gray-400">2024 - Present</p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Flutter Mobile Application Developer
                  </h4>
                  <p className="text-gray-300 font-medium">Fintelex (Pvt) Ltd</p>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    Building and maintaining cross-platform mobile applications
                    for Android and iOS using Flutter. Experienced with API
                    integration, Azure DevOps pipelines, and backend
                    collaboration to deliver high-quality products with smooth
                    user experiences.
                  </p>
                </div>
              </motion.li>
            </motion.ol>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Qualification;
