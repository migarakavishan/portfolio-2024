import React, { useState } from "react";

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

import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"

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
      githubLink: "", // No GitHub link for this project
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
        "Movie Hub appliction is both android, ios applicaiton. Used TMDB  API to fetch data. ",

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
      images: [project6o1,project6o2],
      title: "Addidas Ecommerce App",
      description:
        "The Adidas E-commerce App is built with Dart and Flutter, using Firebase for authentication and data management. It allows users to browse Adidas products, add items to the cart, and securely make purchases via stripe payment gateway. With real-time updates and a user-friendly interface, the app offers a smooth shopping experience.",

      githubLink: "https://github.com/migarakavishan/addidas_ecommerce_app.git",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 7,
      images: [project7o1,project7o2],
      title: "Apple Ecommerce App",
      description:
        "The Apple E-commerce App is developed with Dart and Flutter, utilizing Firebase for authentication and backend services. It enables users to browse and explore Apple products, add items to the cart, and manage their profiles. The app also includes an admin panel for product management. It provides a clean, intuitive experience for both users and administrators.",

      githubLink: "https://github.com/migarakavishan/apple_ecommerce.git",
      technologies: ["Flutter", "Dart", "Firebase"],
    },
    {
      id: 8,
      images: [project8o1,project8o2],
      title: "Tomato Math Game",
      description:
      (
        <>
          The Tomato Math Game is web based Mathemetical game usign Tomato API for math equation. Created this applicaiton for my 3rd Year semester 1 COMPARATIVE INTEGRATED SYSTEMS subject final project. This game has players leaderboard, real-time updates and a user-friendly interfaces for smooth playing experience. Try the game out{" "}
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
      technologies: ["React js", "javascript", "Firebase"],
    },
    {
      id: 9,
      images: [project9o1],
      title: "Pharmacy Management System",
      description:
        "Pharmacy web site admin and user site for Year2 Sem2 Final project",

      githubLink: "https://github.com/migarakavishan/code-blenders-final-project.git",
      technologies: ["html", "css", "php","javascript","mysql"],
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
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full py-20"
    >
      <div className="max-w-screen-lg mx-auto text-white p-4">
        <div>
          <p className="text-6xl font-bold flex justify-center">Portfolio</p>
          <p className="text-2xl mt-20 text-gray-400">
            Check out some of my work right here
          </p>
        </div>

        <div className="flex flex-col space-y-8 px-2 sm:px-10 py-8">
          {projects.map(
            ({ id, images, title, description, githubLink, technologies }) => (
              <div
                key={id}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <ImageSlideshow images={images} />
                <div className="flex flex-col sm:w-2/3">
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="text-gray-400 mt-2">{description}</p>

                  {/* Render Technologies */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-white text-sm font-semibold py-1 px-2 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Conditionally Render GitHub Button */}
                  {githubLink && (
                    <button
                      onClick={() => window.open(githubLink, "_blank")}
                      className="mt-3 bg-blue-500 hover:bg-blue-600 font-semibold py-1 px-3 rounded-md transition duration-200"
                    >
                      View on GitHub
                    </button>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        {/* UI/UX Section */}
        <div className="mt-16">
        <p className="text-2xl mt-20 text-gray-400">UI/UX Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {uiuxProjects.map(({ id, image, title, link }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative group">
                  <img
                    src={image}
                    alt={title}
                    className="rounded-lg object-cover w-full h-60 transform transition duration-300 group-hover:scale-105"
                  />
                  
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-70 h-60">
      <img
        src={images[currentIndex]}
        alt={`Project Image ${currentIndex + 1}`}
        className="rounded-lg object-cover h-full w-full transition-opacity duration-500"
      />

      {/* Conditionally render buttons only if there are 2 or more images */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          >
            &lt;
          </button>
          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
          >
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

export default Portfolio;
