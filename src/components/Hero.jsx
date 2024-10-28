import TypingEffect from "react-typing-effect";
import HeroImg from "../assets/images/hero.JPG"

const Hero = () => (
  <section
    id="home"
    className="hero h-screen bg-cover bg-center flex flex-col justify-center items-start p-20 text-white"
    style={{ backgroundImage: `url(${HeroImg})` }}
  >
    <div className="hero-content">
      <h1 className="text-5xl font-bold">Henry Amos</h1>
      <p className="text-xl flex items-center">
        <span className="mr-2">I&apos;m a</span>
        <TypingEffect
          text={["Front-End Developer", "UI/UX Designer", "Freelancer"]}
          className="font-semibold"
        />
      </p>
      <div className="hero-buttons flex space-x-4 mt-8">
        <a
          href="/assets/files/Benjamin_Henry_Amos_Cv.pdf"
          download
          className="btn bg-primary px-6 py-2 rounded text-light"
        >
          Download CV
        </a>
        <a
          href="#contact"
          className="btn border border-light text-light px-6 py-2 rounded"
        >
          Contact Me
        </a>
      </div>
      <div className="social-media flex space-x-4 mt-4">
        <a
          href="https://github.com/henryamos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-amos-5a37b8211/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-light"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        {/* Add other social links similarly */}
      </div>
    </div>
  </section>
);

export default Hero;
