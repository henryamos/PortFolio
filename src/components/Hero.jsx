import TypingEffect from "react-typing-effect";
import HeroImg from "../assets/images/hero.JPG";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
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
      <h1 className="text-3xl lg:text-[5rem]  mb-2 lg:mb-4 font-bold ">Henry Amos</h1>
      <p className="text-lg lg:text-3xl flex items-center">
        <span className="mr-2">I&apos;m a</span>
        <TypingEffect
          text={["Front-End Developer", "UI/UX Designer", "Freelancer"]}
          className="font-semibold"
        />
      </p>

      {/* Responsive Button Layout */}
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 mt-6 lg:mt-8">
        <a
          href="/assets/files/Benjamin_Henry_Amos_Cv.pdf"
          download
          className="bg-primary px-6 py-2 rounded text-white text-center lg:text-left"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="border border-light text-white px-6 py-2 rounded text-center lg:text-left"
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
          className="text-lightPrimary text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-amos-5a37b8211/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Kwesi_Amos21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/nana_kwesi_amos/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light text-2xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.behance.net/henryamos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary text-2xl"
        >
          <FaBehance />
        </a>
        <a
          href="https://dribbble.com/henryamos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lightPrimary text-2xl"
        >
          <FaDribbble />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
