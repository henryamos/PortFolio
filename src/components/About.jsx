import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import AboutImg from "../assets/images/myPic.JPG";
import { motion } from "framer-motion";

const About = () => (
  <section id="about" className="p-8 mt-12 flex justify-center">
    <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:gap-12 max-w-screen-lg">
      {/* Image Section with Motion Animation */}
      <motion.div
        className="flex justify-center w-full lg:w-1/3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={AboutImg}
          alt="About Me"
          className="rounded-full w-2/3 lg:w-full shadow-lg"
        />
      </motion.div>

      {/* Text Section with Motion Animation */}
      <motion.div
        className="text-center lg:text-left w-full lg:w-2/3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-4xl lg:text-7xl text-blueDark font-bold mb-4">
          About <span className="text-blue">Me</span>
        </h2>
        <p className="text-lg mb-6">
          Dedicated Web Developer skilled in creating modern, intuitive, and
          responsive web applications using React.js, Tailwind CSS, and Node.js.
          Proficient in crafting scalable solutions and delivering user-friendly
          interfaces. Successfully built and deployed wailist application,charity foundation website and many more.
          Excited to collaborate with innovative teams and contribute to impactful projects.
        </p>
        <div className="tech-stack">
          <h3 className="text-2xl font-semibold mb-4">
            Tech <span className="text-blue">Stack</span>
          </h3>
          <div className="flex justify-center lg:justify-start space-x-4">
            <FaHtml5 className="text-red-600 text-5xl" />
            <FaCss3Alt className="text-blue text-5xl" />
            <FaJs className="text-yellow-500 text-5xl" />
            <FaReact className="text-blue text-5xl" />
            <FaNodeJs className="text-green-500 text-5xl" />
            
            
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
