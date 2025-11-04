import React from "react";

const Qualification = () => {
  return (
    <div
      name="qualification"
      className="relative bg-gradient-to-b from-gray-900 to-black w-full text-white overflow-hidden py-24 px-4"

    >
      <div className="max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <p className="text-5xl sm:text-6xl font-bold">Qualification</p>
          <p className="text-xl text-gray-400 mt-4">
            My educational background & work experience
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">
            🎓 Education
          </h2>

          <div className="flex justify-center">
            <ol className="border-l border-neutral-100 dark:border-neutral-100">
              <li>
                <div className="flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-gray-400">2021 - 2023 (Completed)</p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Higher Diploma in Information Technology
                  </h4>
                  <p className="text-gray-400">SLIIT CITY UNI</p>
                </div>
              </li>

              <li>
                <div className="flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
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
              </li>
            </ol>
          </div>
        </div>

        {/* Work Experience Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-300">
            💼 Work Experience
          </h2>

          <div className="flex justify-center">
            <ol className="border-l border-neutral-100 dark:border-neutral-100">
              <li>
                <div className="flex items-center pt-3">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                  <p className="text-sm text-gray-400">2024 - Present</p>
                </div>
                <div className="mb-6 ml-4 mt-2">
                  <h4 className="mb-1.5 text-xl font-semibold">
                    Flutter Mobile Application Developer
                  </h4>
                  <p className="text-gray-400 font-medium">
                    Fintelex (Pvt) Ltd
                  </p>
                  <p className="text-gray-400 mt-2">
                    Building and maintaining cross-platform mobile applications
                    for Android and iOS using Flutter. Experienced with API
                    integration, Azure DevOps pipelines, and backend
                    collaboration to deliver high-quality products with smooth
                    user experiences.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
