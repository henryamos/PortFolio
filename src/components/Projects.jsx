// src/components/Projects.js

import { useState } from "react";
import projectData from "./data/ProjectData";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaLink,
} from "react-icons/fa";

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  FaNode: FaNode,
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projectData.filter(
    (project) => activeTab === "all" || project.type === activeTab
  );

  return (
    <section id="projects" className="p-20 bg-white">
      <h2 className="text-4xl font-bold lg:text-7xl text-blueDark text-center mb-12">
        My <span className="text-blue">Projects</span>
      </h2>
      <div className="tab-container flex justify-center space-x-4 mb-8">
        {["all", "uiux", "web", "mobile"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-300"
            } p-3 rounded`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <h3 className="text-lg font-semibold text-center text-blueDark mt-4">{project.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{project.description}</p>
            <div className="flex justify-center space-x-2 mt-4">
              {project.stacks.map((stack, index) => {
                const IconComponent = iconMap[stack.icon];
                return (
                  <IconComponent
                    key={index}
                    className="text-xl"
                    color={stack.color}
                  />
                );
              })}
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLink className="text-2xl" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
