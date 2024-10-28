import TypingEffect from "react-typing-effect";
import HeroImg from "../assets/images/hero.JPG";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaBehance,
 
} from "react-icons/fa";

const Hero = () => (
  <section
    id="home"
    className="h-screen bg-cover bg-center flex flex-col justify-center items-center lg:items-center p-6 lg:p-20 text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${HeroImg})`,
    }}
  >
    <div className="flex flex-col items-center mt-8 lg:items-center text-center lg:text-left space-y-5 lg:space-y-9">
      <h1 className="text-5xl lg:text-[5rem]  mb-2 lg:mb-4 font-bold ">
        Henry Amos
      </h1>
      <p className="text-xl lg:text-3xl flex items-center">
        <span className="mr-2">I&apos;m a</span>
        <TypingEffect
          text={[
            "Junior Web Developer",
            "Front-end Developer",
            "Back-end Developer",
          ]}
          className="font-semibold text-blue"
        />
      </p>

      {/* Responsive Button Layout */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-6 lg:mt-8">
        <a
          href="/assets/files/Benjamin_Henry_Amos_Cv.pdf"
          download
          className="bg-primary px-12 py-2 rounded  lg:py-4 lg:text-xl text-white text-center lg:text-left"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="border border-light text-white hover:bg-lightPrimary  hover:text-blueDark px-6 py-2 lg:px-8 lg:py-4 lg:text-xl rounded text-center lg:text-left"
        >
          Contact Me
        </a>
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4 mt-6 lg:mt-8">
        <a
          href="https://github.com/henryamos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary hover:text-[#333] text-2xl lg:text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-amos-5a37b8211/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary hover:text-[#0077B5] text-2xl lg:text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Kwesi_Amos21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary hover:text-[#1DA1F2] text-2xl lg:text-3xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/nana_kwesi_amos/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light text-2xl  hover:text-[#FF69B4] lg:text-3xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.behance.net/henryamos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary hover:text-[#1769FF] text-2xl lg:text-3xl"
        >
          <FaBehance />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
