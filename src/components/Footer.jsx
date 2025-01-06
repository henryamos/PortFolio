import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blueLight text-white py-8 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl text-center font-bold">Henry Amos</h2>
          <p className="text-gray-300 mt-4 text-center">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a
            href="#home"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            Contact
          </a>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/henryamos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lightPrimary hover:text-[#333] text-2xl lg:text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Kwesi_Amos21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/nana_kwesi_amos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamin-amos-5a37b8211/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300"
      >
        <FaPaperPlane size={20} />
      </button>
    </footer>
  );
};

export default Footer;
