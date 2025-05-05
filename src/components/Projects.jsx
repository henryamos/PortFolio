// src/components/Projects.js

import { useState } from "react";
import { projectData } from "./data/ProjectData";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
  FaLink,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  FaNode: FaNode,
  SiNextdotjs: SiNextdotjs,
  SiTailwindcss: SiTailwindcss,
  SiTypescript: SiTypescript,
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projectData.filter((project) => {
    if (activeTab === "all") return true;
    return Array.isArray(project.type) 
      ? project.type.includes(activeTab)
      : project.type === activeTab;
  });

  return (
    <section id="projects" className="p-20 bg-white">
      <h2 className="text-4xl font-bold lg:text-7xl text-blueDark text-center mb-12">
        My <span className="text-blue">Projects</span>
      </h2>
      <div className="tab-container flex justify-center space-x-4 mb-12">
        {["all", "web", "mobile", "uiux"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab ${
              activeTab === tab ? "bg-blue text-white" : "bg-gray-200 text-black"
            } px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue hover:text-white transition-colors duration-300`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="portfolio-item bg-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-blueDark mb-4">{project.title}</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex justify-center space-x-6 mb-8">
                {project.stacks.map((stack, index) => {
                  const IconComponent = iconMap[stack.icon];
                  return (
                    IconComponent ? (
                      <IconComponent
                        key={index}
                        className="text-3xl hover:scale-110 transition-transform duration-300"
                        color={stack.color}
                      />
                    ) : null
                  );
                })}
              </div>
              <div className="flex justify-center space-x-8">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaGithub className="text-3xl text-gray-800" />
                </a>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <FaLink className="text-3xl text-blue" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
