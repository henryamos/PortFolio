import React from "react";

const EducationExperience = () => (
  <section className="education py-20 bg-gray-100">
    <div className="education-row w-4/5 mx-auto text-center">
      <h2 className="resume text-4xl font-semibold text-blue-900 mb-10">
        Education & Experience
      </h2>
      <div className="education-container flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
        {/* Education Column */}
        <div className="edu-row flex-1 space-y-4">
          <h3 className="top text-2xl text-blue-500 mb-4">Education</h3>
          <div className="edu-list bg-white p-6 rounded shadow-md transition-transform transform hover:scale-105">
            <span className="date block text-blue-900 font-semibold">
              <i className="fa-regular fa-calendar"></i>&nbsp; September 2019 -
              July 2024
            </span>
            <h4 className="text-primary font-semibold">
              Bachelor's in Information Technology
            </h4>
            <p className="text-gray-700">
              Even the all-powerful Pointing has no control about the blind
              texts; it is an almost unorthographic experience.
            </p>
            <span className="school text-blue-900 font-medium">
              Ghana Communication Technology University
            </span>
          </div>

          <div className="edu-list bg-white p-6 rounded shadow-md transition-transform transform hover:scale-105">
            <span className="date block text-blue-900 font-semibold">
              <i className="fa-regular fa-calendar"></i>&nbsp; September 2012 -
              May 2015
            </span>
            <h4 className="text-primary font-semibold">
              Senior High School Certificate
            </h4>
            <p className="text-gray-700">
              Even the all-powerful Pointing has no control about the blind
              texts; it is an almost unorthographic experience.
            </p>
            <span className="school text-blue-900 font-medium">
              Nsien Senior High School
            </span>
          </div>
        </div>

        {/* Experience Column */}
        <div className="exp-row flex-1 space-y-4">
          <h3 className="top text-2xl text-blue-500 mb-4">Experience</h3>
          <div className="exp-list bg-white p-6 rounded shadow-md transition-transform transform hover:scale-105">
            <span className="date block text-blue-900 font-semibold">
              <i className="fa-regular fa-calendar"></i>&nbsp; September 2023 -
              September 2024
            </span>
            <h4 className="text-primary font-semibold">
              Junior Front-End Engineer
            </h4>
            <p className="text-gray-700">
              Even the all-powerful Pointing has no control about the blind
              texts; it is an almost unorthographic experience.
            </p>
            <span className="school text-blue-900 font-medium">
              Techstripped Africa
            </span>
          </div>

          <div className="exp-list bg-white p-6 rounded shadow-md transition-transform transform hover:scale-105">
            <span className="date block text-blue-900 font-semibold">
              <i className="fa-regular fa-calendar"></i>&nbsp; September 2024 -
              Present
            </span>
            <h4 className="text-primary font-semibold">Junior Web Developer</h4>
            <p className="text-gray-700">
              Even the all-powerful Pointing has no control about the blind
              texts; it is an almost unorthographic experience.
            </p>
            <span className="school text-blue-900 font-medium">
              MEST Africa
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EducationExperience;
