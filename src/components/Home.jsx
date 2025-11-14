import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import ProfileImage from "../assets/yellopro2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className="relative bg-gradient-to-t from-gray-900 to-black h-full w-full overflow-hidden"
    >
      {/* Floating Background Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-cyan-700/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full py-10 sm:py-52 px-4 md:flex-row relative z-10">
        {/* Text Section */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="show"
          className="flex flex-col justify-center my-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            I'm a{" "}
            <ReactTyped
              className="text-cyan-400"
              strings={["Flutter Mobile App Developer"]}
              typeSpeed={50}
              showCursor={false}
            />
          </h2>

          <p className="text-gray-400 py-4 max-w-md">
            Hello! I'm{" "}
            <span className="text-cyan-400 font-bold">Migara Kavishan</span>,
            passionate about building high-quality mobile applications for both
            iOS and Android. I create apps that focus on{" "}
            <span className="font-semibold text-white">
              performance, design, and user experience
            </span>
            .
          </p>

          <div className="mt-4">
            <Link
              to="contact"
              smooth
              duration={500}
              className="group text-white font-semibold w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-900 cursor-pointer shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
            >
              Contact Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mx-5 relative group"
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="rounded-2xl sm:h-80 mx-auto max-w-md h-64 shadow-lg shadow-cyan-800/50 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Glow Ring on Hover */}
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500 opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
