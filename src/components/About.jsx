import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import AboutImg from '../assets/images/myPic.JPG'

const About = () => (
  <section
    id="about"
    className="about-me p-8 mt-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8"
  >
    <div
      className="img-container w-1/2 lg:w-1/3 bg-cover bg-center "
      style={{ backgroundImage: `url(${AboutImg})` }}
    ></div>
    <div className="about-text w-1/2 lg:w-2/3">
      <h2 className="text-4xl font-bold">
        About <span className="text-blue-600">Me</span>
      </h2>
      <p className="text-lg my-4">
        I’m a front-end developer passionate about crafting engaging web
        experiences. With expertise in React and Tailwind CSS, I love building
        user-centric applications.
      </p>
      <div className="tech-stack mt-6">
        <h3 className="text-2xl font-semibold">
          Tech <span className="text-primary">Stack</span>
        </h3>
        <div className="icons flex space-x-4 mt-4">
          <FaHtml5 className="text-red-600 text-5xl" />
          <FaCss3Alt className="text-blue text-5xl" />
          <FaJs className="text-yellow-500 text-5xl" />
          <FaReact className="text-blue text-5xl" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
