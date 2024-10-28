
const services = [
  {
    icon: "fa-mobile-alt",
    title: "App Development",
    description: "I create seamless user experiences on mobile.",
  },
  {
    icon: "fa-code",
    title: "Web Development",
    description: "Building responsive and interactive websites.",
  },
  {
    icon: "fa-palette",
    title: "UI/UX Design",
    description: "Designing intuitive interfaces with user focus.",
  },
  {
    icon: "fa-hands-helping",
    title: "Tech Volunteering",
    description: "Providing mentorship in the tech community.",
  },
];

const Services = () => (
  <section id="services" className="p-20 bg-lightPrimary">
    <h2 className="text-4xl font-bold text-center mb-12">
      Featured <span className="text-blue-600">Services</span>
    </h2>
    <div className="service-container flex flex-wrap justify-center gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-item w-60 p-6 bg-white rounded-lg shadow-lg text-center"
        >
          <i
            className={`fas ${service.icon} text-4xl mb-4`}
            style={{ color: "#2da3e4" }}
          ></i>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
