import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "experience" },
    { id: 4, link: "qualification" },
    { id: 5, link: "portfolio" },
    { id: 6, link: "contact" },
  ];

  // Framer motion variants for mobile menu
  const menuVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-10 text-white bg-black bg-opacity-95 fixed top-0 z-50 shadow-md">
      {/* Logo */}
      <div>
        <h1 className="text-5xl font-signature">Migara</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200 hover:text-white"
          >
            <Link to={link} smooth={true} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-1 z-20 text-gray-500 md:hidden"
        aria-label={nav ? "Close Menu" : "Open Menu"}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <motion.ul
        initial="hidden"
        animate={nav ? "visible" : "hidden"}
        variants={menuVariants}
        className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-400 z-10 md:hidden`}
      >
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            variants={itemVariants}
            className="px-4 cursor-pointer capitalize py-6 text-3xl"
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              offset={-80} // optional: adjust scroll for fixed navbar
              onClick={() => setNav(false)} // close menu after click
            >
              {link}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default NavBar;
