import { motion } from 'framer-motion';
import { HiLightBulb, HiUsers, HiCode, HiStar } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';
import lawFirmImg from "../assets/images/lawFirm.png";
import techstrippedImg from "../assets/images/techstripped-Macbook.png";
import delkomImg from "../assets/images/delkom.jpg";

const ClientWork = () => {
  const stats = [
    {
      id: 1,
      number: "3+",
      label: "Client Projects",
      icon: <HiUsers className="text-3xl text-blue-500" />,
    },
    {
      id: 2,
      number: "10+",
      label: "Contributions",
      icon: <HiCode className="text-3xl text-purple-500" />,
    },
    {
      id: 3,
      number: "100%",
      label: "Client Satisfaction",
      icon: <HiStar className="text-3xl text-yellow-500" />,
    },
  ];

  const clientProjects = [
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
      clientName: "TechStripped Africa",
      role: "Frontend Developer",
      image: techstrippedImg,
      description: "Contributed to building a comprehensive portal for university community engagement.",
      contributions: [
        "Built interactive user interfaces using React",
        "Implemented user authentication and dashboard features",
        "Collaborated with team members to enhance platform functionality"
      ],
      links: {
        github: "https://github.com/techstrippedafrica/Membership-Portal",
        live: "https://members.techstripped.com/#/login"
      }
    },
    {
      id: 3,
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

  return (
    <section className="py-20 bg-gray-50" id="client-work">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Work & Contributions</h2>
          <div className="flex items-center justify-center gap-2">
            <HiLightBulb className="text-yellow-500 text-2xl" />
            <p className="text-gray-600">Showcasing successful collaborations and impactful contributions</p>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 bg-white rounded-2xl shadow-lg p-8"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="flex items-center gap-4 justify-center">
              <div className="p-3 bg-gray-50 rounded-lg">{stat.icon}</div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-gray-800">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* Project Image */}
              <div className="aspect-video w-full">
                <img 
                  src={project.image} 
                  alt={project.clientName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Content */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/95 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-y-auto"
                initial={false}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.clientName}</h3>
                    <p className="text-blue-400 font-medium mb-3">{project.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-semibold flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-green-500" />
                      Key Contributions
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {project.contributions.map((contribution, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <span className="text-green-500 mt-1">•</span>
                          {contribution}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 mt-auto pt-4">
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded hover:from-gray-700 hover:to-gray-600 transition-all duration-300 text-sm flex-1 text-center"
                    >
                      View Code
                    </a>
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 text-sm flex-1 text-center"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientWork;
