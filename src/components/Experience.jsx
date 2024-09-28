import React from "react";
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

const Experience = () => {
  return (
    <div
      name="experience"
      className="bg-gradient-to-t from-gray-800 to-black w-full text-white sm:py-24 py-96 pr-2 pl-2"
    >
      <div className="max-w-screen-lg mx-auto ">
        <div className="mb-12">
          <p className="text-6xl font-bold text-center ">Experience</p>
          <p className="text-xl mt-6 text-gray-400">
            Technologies I have worked with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-4 sm:px-0">
          {[
            { image: flutterImage, title: "Flutter" },
            { image: dartImage, title: "Dart" },
            { image: htmlimage, title: "HTML" },
            { image: cssimage, title: "CSS" },
            { image: jsimage, title: "JavaScript" },
            { image: tailwindimage, title: "Tailwind" },
            { image: bootstrapimage, title: "Bootstrap" },
            { image: reactimage, title: "React" },
            { image: phpimage, title: "Php" },
            { image: githubimage, title: "GitHub" },
            { image: firebaseImage, title: "Firebase" },
          ].map(({ image, title }) => (
            <div
              key={title}
              className="shadow-xl py-6 rounded-lg flex flex-col items-center"
            >
              <img src={image} alt={title} className="w-24 h-24" />
              <p className="text-gray-300 mt-4">{title}</p>
            </div>
          ))}
        </div>

        <div className=" mt-20 mb-12">
          <p className="text-xl text-gray-400">Software tools I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-4 sm:px-0">
          {[
            { image: figmaimage, title: "Figma" },
            { image: aiimage, title: "Illustrator" },
            { image: psimage, title: "Photoshop" },
            { image: xdimage, title: "Xd" },
          ].map(({ image, title }) => (
            <div
              key={title}
              className="shadow-xl py-6 rounded-lg flex flex-col items-center"
            >
              <img src={image} alt={title} className="w-24 h-24" />
              <p className="text-gray-300 mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
