import { motion } from 'framer-motion';
import { HiLightBulb, HiUsers, HiCode, HiStar } from 'react-icons/hi';
import { FaCheckCircle, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectData } from './data/ProjectData';
import lawFirmImg from "../assets/images/lawFirm.png";
import delkomImg from "../assets/images/delkom.jpg";
import bricksAndWoodImg from "../assets/images/bricks.jpg";
import technologiesImg from "../assets/images/1294technologies.jpg";

const ClientWork = () => {
  const stats = [
    {
      id: 1,
      number: "4+",
      label: "Client Projects",
      icon: <HiUsers className="text-4xl text-white" />,
      color: "from-[#00a5e4] to-[#12556d]"
    },
    {
      id: 2,
      number: "15+",
      label: "Contributions",
      icon: <HiCode className="text-4xl text-white" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      number: "100%",
      label: "Client Satisfaction",
      icon: <HiStar className="text-4xl text-white" />,
      color: "from-yellow-500 to-yellow-600"
    },
  ];

  // Existing client projects
  const existingProjects = [
    {
      id: 1,
      clientName: "PRO-ATTORNEY",
      role: "Frontend Developer",
      image: lawFirmImg,
      description: "Led the frontend development of a professional law firm website, implementing modern UI/UX practices and responsive design principles.",
      contributions: [
        "Developed a responsive and professional website using React",
        "Implemented modern UI components and animations",
        "Optimized website performance and SEO"
      ],
      links: {
        github: "https://github.com/henryamos/lawyer-website",
        live: "https://standerferfamilylawgroup.net/"
      }
    },
    {
      id: 2,
      clientName: "Delkom Charity Foundation",
      role: "Full Stack Developer",
      image: delkomImg,
      description: "Developed a full-stack MERN application for a charity foundation, enabling online donations and volunteer registration with secure payment processing.",
      contributions: [
        "Built complete MERN stack application with React frontend and Node.js/Express backend",
        "Integrated Molle payment API for secure donation processing",
        "Implemented volunteer registration system and donor management",
        "Created responsive UI with Tailwind CSS and custom animations",
        "Developed secure API endpoints for donation processing and user management"
      ],
      links: {
        github: "https://github.com/henryamos/DelkomEng",
        live: "https://delkomengineering.com/"
      }
    }
  ];

  // New client projects
  const newProjects = [
    {
      id: 3,
      clientName: "Bricks and Wood Ghana",
      role: "Full Stack Developer",
      image: bricksAndWoodImg,
      description: "Developed a luxury real estate platform showcasing premium properties in Ghana, built with Next.js, React, TypeScript, and Tailwind CSS.",
      contributions: [
        "Implemented advanced SEO optimization for better visibility",
        "Created responsive property listings with virtual tours",
        "Developed contact forms and blog section",
        "Integrated modern UI/UX practices with Tailwind CSS",
        "Built with Next.js 14 for optimal performance"
      ],
      links: {
        github: "https://github.com/henryamos/brickswood",
        live: "https://www.brickandwoodghana.com/"
      }
    },
    {
      id: 4,
      clientName: "1294 Technologies",
      role: "Frontend Developer",
      image: technologiesImg,
      description: "Created a modern tech company website showcasing web solutions and digital branding services.",
      contributions: [
        "Built responsive and interactive UI with React",
        "Implemented smooth animations and transitions",
        "Designed clean and professional layout with Tailwind CSS",
        "Optimized for performance and user experience",
        "Integrated modern design principles"
      ],
      links: {
        github: "https://github.com/henryamos/1294Technologies",
        live: "https://1294technologies.com/"
      }
    }
  ];

  // Combine existing and new projects
  const clientProjects = [...existingProjects, ...newProjects];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50" id="client-work">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-sm font-medium shadow-sm">
              Professional Experience
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Client Work & Contributions
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Showcasing successful collaborations and impactful contributions that drive business growth
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300 shadow-lg"></div>
              <div className="relative p-8 rounded-2xl border border-gray-100 bg-white">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-6 inline-block shadow-lg`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group min-h-[600px]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="h-[300px] relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.clientName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex flex-col gap-3 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">{project.clientName}</h3>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 rounded-full text-sm font-medium shadow-sm w-fit">
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">{project.description}</p>

                  {/* Contributions */}
                  <div className="space-y-2 mb-6 flex-1">
                    {project.contributions.slice(0, 3).map((contribution, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-600 text-sm leading-relaxed">{contribution}</p>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto pt-6">
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaGithub className="text-lg" />
                      <span>Code</span>
                    </a>
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#00a5e4] to-[#12556d] text-white rounded-lg hover:from-[#02b9e3] hover:to-[#2d84b4] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
