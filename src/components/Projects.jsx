import  { useState } from "react";

const projects = [
  {
    id: 1,
    type: "web",
    title: "Techstripped Africa",
    description: "A membership portal...",
    imgSrc: "/images/techstripped-Macbook.png",
  },
  // Add more projects
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeTab === "all" || project.type === activeTab
  );

  return (
    <section id="projects" className="p-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Projects</span>
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
      <div className="portfolio-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
