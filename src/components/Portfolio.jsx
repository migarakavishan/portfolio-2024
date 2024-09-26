import React, { useState } from "react";

import project1o1 from "../assets/project1.1.png";
import project1o2 from "../assets/project1.2.png";
import project1o3 from "../assets/project1.3.png";
import project1o4 from "../assets/project1.4.png";
import project2o1 from "../assets/project2.1.png";
import project3o1 from "../assets/project3.1.png";
import project4o1 from "../assets/project4.1.png";
import project5o1 from "../assets/project5.1.png";

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

        <div className="flex flex-col space-y-8 px-12 py-8">
          {projects.map(
            ({ id, images, title, description, githubLink, technologies }) => (
              <div
                key={id}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <ImageSlideshow images={images} />
                <div className="flex flex-col w-2/3">
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
