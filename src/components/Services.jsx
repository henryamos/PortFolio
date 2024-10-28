import { FaMobileAlt, FaCode, FaPalette, FaHandsHelping } from "react-icons/fa";

const services = [
  {
    icon: <FaMobileAlt style={{ color: "#2da3e4" }} />, // Blue for App Development
    title: "App Development",
    description: "I create seamless user experiences on mobile.",
  },
  {
    icon: <FaCode style={{ color: "#e67e22" }} />, // Orange for Web Development
    title: "Web Development",
    description: "Building responsive and interactive websites.",
  },
  {
    icon: <FaPalette style={{ color: "#9b59b6" }} />, // Purple for UI/UX Design
    title: "UI/UX Design",
    description: "Designing intuitive interfaces with user focus.",
  },
  {
    icon: <FaHandsHelping style={{ color: "#27ae60" }} />, // Green for Tech Volunteering
    title: "Tech Volunteering",
    description: "Providing mentorship in the tech community.",
  },
];

const Services = () => (
  <section id="services" className="p-20 bg-lightPrimary">
    <h2 className="text-4xl lg:text-7xl text-blueDark font-bold text-center mb-12">
      Featured <span className="text-blue">Services</span>
    </h2>
    <div className="service-container flex flex-wrap justify-center gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-item w-80 lg:w-4/12 p-8 bg-white rounded-lg shadow-lg text-center"
        >
          {/* Flex container for icon and title */}
          <div className="flex items-center justify-center mb-4 space-x-3">
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
