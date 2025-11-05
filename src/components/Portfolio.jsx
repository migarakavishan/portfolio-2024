import React, { useState } from "react";
import { motion } from "framer-motion";

import project1o1 from "../assets/project1.1.png";
import project1o2 from "../assets/project1.2.png";
import project1o3 from "../assets/project1.3.png";
import project1o4 from "../assets/project1.4.png";
import project2o1 from "../assets/project2.1.png";
import project3o1 from "../assets/project3.1.png";
import project4o1 from "../assets/project4.1.png";
import project5o1 from "../assets/project5.1.png";
import project6o1 from "../assets/project6.1.png";
import project6o2 from "../assets/project6.2.png";
import project7o1 from "../assets/project7.1.png";
import project7o2 from "../assets/project7.2.png";
import project8o1 from "../assets/project8.1.png";
import project8o2 from "../assets/project8.2.png";
import project9o1 from "../assets/project9.1.png";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      images: [project1o1, project1o2, project1o3, project1o4],
      title: "Little Therapist Android Application",
      description:
        "This mobile app is designed for children with neurodiversity, including Autism Spectrum Disorder (ASD), ADHD, and Sensory Processing Disorder (SCD). It offers engaging games and activities tailored to support their learning and development. Created as my final research project for university, this app promotes fun, inclusivity, and skill-building in a safe environment.",
      githubLink: "https://github.com/migarakavishan/littletherapist.git",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 2,
      images: [project2o1],
      title:
        "Receipt Print Android Application and Reps, Receipts Manage System",
      description:
        "Working as a freelance frontend developer and UI/UX designer in this project for Standard Industries (Pvt) Ltd Bombuwala",
      githubLink: "",
      technologies: ["React js", "JavaScript", "Node.js", "Java"],
    },
    {
      id: 3,
      images: [project3o1],
      title: "Space X mobile app",
      description:
        "The SpaceX Flutter App is a sleek and modern mobile application built with Flutter. It provides detailed information about SpaceX rockets, launchpads, and landing pads using the SpaceX API. Explore the fascinating world of SpaceX with an intuitive and engaging interface.",
      githubLink: "https://github.com/migarakavishan/space_x.git",
      technologies: ["Flutter", "Dart", "API Integration"],
    },
    {
      id: 4,
      images: [project4o1],
      title: "Movie Hub application",
      description:
        "Movie Hub appliction is both android, ios applicaiton. Used TMDB  API to fetch data.",
      githubLink: "https://github.com/migarakavishan/movie_hub.git",
      technologies: ["Flutter", "Dart", "API Integration"],
    },
    {
      id: 5,
      images: [project5o1],
      title: "Phone Book App",
      description:
        "A sleek and intuitive contact manager built with Flutter and SQLite. Easily add, view, update, and delete contacts. Perfect for organizing your connections!",
      githubLink: "https://github.com/migarakavishan/phone_book.git",
      technologies: ["Flutter", "Dart", "SQLite"],
    },
    {
      id: 6,
      images: [project6o1, project6o2],
      title: "Addidas Ecommerce App",
      description:
        "The Adidas E-commerce App is built with Dart and Flutter, using Firebase for authentication and data management. It allows users to browse Adidas products, add items to the cart, and securely make purchases via stripe payment gateway. With real-time updates and a user-friendly interface, the app offers a smooth shopping experience.",
      githubLink: "https://github.com/migarakavishan/addidas_ecommerce_app.git",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 7,
      images: [project7o1, project7o2],
      title: "Apple Ecommerce App",
      description:
        "The Apple E-commerce App is developed with Dart and Flutter, utilizing Firebase for authentication and backend services. It enables users to browse and explore Apple products, add items to the cart, and manage their profiles. The app also includes an admin panel for product management. It provides a clean, intuitive experience for both users and administrators.",
      githubLink: "https://github.com/migarakavishan/apple_ecommerce.git",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 8,
      images: [project8o1, project8o2],
      title: "Tomato Math Game",
      description: (
        <>
          The Tomato Math Game is a web-based mathematical game using the Tomato
          API for math equations. Created for my 3rd Year Comparative Integrated
          Systems project, it includes leaderboards, real-time updates, and a
          user-friendly interface. Try it{" "}
          <a
            href="https://tomato-game.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            here
          </a>
          .
        </>
      ),
      githubLink: "https://github.com/migarakavishan/tomato-game.git",
      technologies: ["React js", "JavaScript", "Firebase"],
    },
    {
      id: 9,
      images: [project9o1],
      title: "Pharmacy Management System",
      description:
        "Pharmacy website admin and user site for Year2 Sem2 final project.",
      githubLink:
        "https://github.com/migarakavishan/code-blenders-final-project.git",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "MySQL"],
    },
  ];

  const uiuxProjects = [
    {
      id: 1,
      image: project1,
      title: "UI/UX Design Project 1",
      link: "https://www.figma.com/design/OVSr0cVguOGpCpOkzcOBjJ/Pharmarcy?node-id=0-1&t=cm5hgrijsjdVkdW7-1",
    },
    {
      id: 2,
      image: project2,
      title: "UI/UX Design Project 2",
      link: "https://www.figma.com/design/aKSYO4Nn0AA5C6TY4k0jzA/food-app?node-id=0-1&t=MPpmqsQJ2W6hRsqN-1",
    },
    {
      id: 3,
      image: project3,
      title: "UI/UX Design Project 3",
      link: "https://www.figma.com/design/a6FyW5JLqI2MQSE1wkiGmP/shoe-app?node-id=0-1&t=vbLRRDxrvueF52hj-1",
    },
    {
      id: 4,
      image: project4,
      title: "UI/UX Design Project 4",
      link: "https://www.figma.com/design/ApMmsC3JduMLj2AruwT1DD/Pharmarcy-admin-page?node-id=0-1&t=2vi22rNm7uAwgFBF-1",
    },
    {
      id: 5,
      image: project5,
      title: "UI/UX Design Project 5",
      link: "https://www.figma.com/design/rfGZ1YDGXgWiwGFNdSFVQP/luxury-vehicle-ui?node-id=0-1&t=kxidqb8z23K2UAwc-1",
    },
  ];

  return (
    <div
      name="portfolio"
      className="relative bg-gradient-to-t from-gray-900 via-black to-gray-950 w-full text-white overflow-hidden py-24 px-4"
    >
      <div className="max-w-screen-lg mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg inline-block">
            Portfolio
          </h2>
          <p className="text-2xl mt-6 text-gray-400">
            Check out some of my work right here
          </p>
        </motion.div>

        {/* Project List */}
        <div className="flex flex-col space-y-8 px-2 sm:px-10 py-8">
          {projects.map(
            ({ id, images, title, description, githubLink, technologies }, i) => (
              <motion.div
                key={id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={i * 0.1}
                viewport={{ once: false }}
                whileHover={{ scale: 1.01 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-gray-800/30 rounded-lg p-6 backdrop-blur-lg hover:shadow-cyan-700/30 hover:shadow-lg transition-all duration-300"
              >
                <ImageSlideshow images={images} />
                <div className="flex flex-col sm:w-2/3">
                  <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">
                    {description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-white text-sm font-semibold py-1 px-2 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Button */}
                  {githubLink && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      onClick={() => window.open(githubLink, "_blank")}
                      className="mt-4 bg-cyan-600 hover:bg-cyan-700 font-semibold py-1.5 px-4 rounded-md transition duration-200"
                    >
                      View on GitHub
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* UI/UX Projects Section */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-20 text-center"
        >
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-md inline-block">
            UI/UX Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {uiuxProjects.map(({ id, image, title, link }, i) => (
              <motion.a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                whileHover={{ scale: 1.05 }}
                className="block group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={title}
                    className="rounded-lg object-cover w-full h-60 transform transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-lg font-semibold">
                    View Design
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      className="relative w-72 h-60 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
    >
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt={`Project Image ${currentIndex + 1}`}
        className="object-cover w-full h-full rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white p-2 rounded-full hover:bg-gray-700"
          >
            &gt;
          </button>
        </>
      )}
    </motion.div>
  );
};

export default Portfolio;
