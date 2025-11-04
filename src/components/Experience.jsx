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
import vscodeimage from "../assets/vscodelogo.webp";
import androidstudioimage from "../assets/androidstudio.png";
import xcodeimage from "../assets/xcode.png";
import postmanimage from "../assets/postman.svg";
import azureimage from "../assets/azure.webp";
import dotnetimage from "../assets/dotnet.png";

const Experience = () => {
  return (
    <div
      name="experience"
      className="relative bg-gradient-to-t from-gray-900 to-black w-full text-white overflow-hidden py-24 px-4"

    >
      <div className="max-w-screen-lg mx-auto">
        <div className="mb-12 text-center">
          <p className="text-6xl font-bold">Experience</p>
          <p className="text-xl mt-6 text-gray-400">
            Technologies and tools I’ve worked with
          </p>
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
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
          ].map(({ image, title }) => (
            <div
              key={title}
              className="shadow-xl py-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform duration-200"
            >
              <img src={image} alt={title} className="w-20 h-20" />
              <p className="text-gray-300 mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>

        {/* Software Tools */}
        <div className="mt-20 mb-12 text-center">
          <p className="text-xl text-gray-400">Software tools I’ve worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { image: vscodeimage, title: "VS Code" },
            { image: androidstudioimage, title: "Android Studio" },
            { image: xcodeimage, title: "Xcode" },
            { image: postmanimage, title: "Postman" },
            { image: azureimage, title: "Azure DevOps" },
            { image: figmaimage, title: "Figma" },
            { image: aiimage, title: "Illustrator" },
            { image: psimage, title: "Photoshop" },
            { image: xdimage, title: "Adobe XD" },
            
          ].map(({ image, title }) => (
            <div
              key={title}
              className="shadow-xl py-6 rounded-lg flex flex-col items-center hover:scale-105 transition-transform duration-200"
            >
              <img src={image} alt={title} className="w-20 h-20" />
              <p className="text-gray-300 mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
