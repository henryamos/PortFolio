import { motion } from "framer-motion";
import { section } from "framer-motion/m";
import { FaCalendarAlt } from "react-icons/fa";

const EducationExperience = () => {
  // Animation variants for staggered entrance
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="education">
      <motion.section
        className="education py-24 bg-gray-100"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="education-row w-4/5 mx-auto text-center">
          <h2 className="text-4xl lg:text-7xl font-semibold text-blueDark mb-10">
            Education & <span className="text-blue">Experience</span>
          </h2>

          <div className="education-container flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
            {/* Education Column */}
            <div className="edu-row flex-1 space-y-4">
              <h3 className="top text-2xl text-blueDark mb-4">Education</h3>

              <motion.div
                className="edu-list bg-white p-6 rounded shadow-md"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span className="date block text-black font-semibold">
                  <FaCalendarAlt className="inline mr-2" />
                  August 2019 - August 2023
                </span>
                <h4 className="text-blueDark font-semibold">
                  Bachelor&apos;s in Information Technology
                </h4>
                <p className="text-gray-700  tracking-tight text-md lg:text-lg text-center">
                  Studied various aspects of Information Technology including
                  software engineering, networking, and database management.
                </p>
                <span className="school text-blueDark font-medium">
                  University Of Cape Coast
                </span>
              </motion.div>

              <motion.div
                className="edu-list bg-white p-6 rounded shadow-md"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span className="date block text-black font-semibold">
                  <FaCalendarAlt className="inline mr-2" />
                  November 2015 - May 2018
                </span>
                <h4 className="text-blueDark font-semibold">
                  Senior High School Certificate
                </h4>
                <p className="text-gray-700  tracking-tight text-md lg:text-lg text-center">
                  Completed coursework in science and mathematics, with a focus
                  on developing analytical and problem-solving skills.
                </p>
                <span className="school text-blueDark font-medium">
                  Edinaman Senior High
                </span>
              </motion.div>
            </div>

            {/* Experience Column */}
            <div className="exp-row flex-1 space-y-4">
              <h3 className="top text-2xl text-blue mb-4">Experience</h3>

              <motion.div
                className="exp-list bg-white p-6 rounded shadow-md"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span className="date block text-blue-900 font-semibold">
                  <FaCalendarAlt className="inline mr-2" />
                  September 2023 - September 2024
                </span>
                <h4 className="text-primary font-semibold">
                  Front-End Engineer
                </h4>
                <p className="text-gray-700  tracking-tight text-md lg:text-lg text-center">
                  Developed user-friendly web interfaces and collaborated with
                  cross-functional teams to enhance user experience.
                </p>
                <span className="school text-blue font-medium">
                  Techstripped Africa
                </span>
              </motion.div>

              <motion.div
                className="exp-list bg-white p-6 rounded shadow-md"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <span className="date block text-blue-900 font-semibold">
                  <FaCalendarAlt className="inline mr-2" />
                  September 2024 - Present
                </span>
                <h4 className="text-primary font-semibold">
                  Back-End Engineer
                </h4>
                <p className="text-gray-700  tracking-tight text-md lg:text-lg text-center">
                  Worked on server-side logic, database management, and API
                  integration to support web applications.
                </p>
                <span className="school text-blue font-medium">
                  MEST Africa
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default EducationExperience;
