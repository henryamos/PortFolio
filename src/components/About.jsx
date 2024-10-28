

const About = () => (
  <section
    id="about"
    className="about-me p-8 mt-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-x-8"
  >
    <div
      className="img-container w-1/2 lg:w-1/3 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/myPic.JPG')" }}
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
          Tech <span className="text-blue-600">Stack</span>
        </h3>
        <div className="icons flex space-x-4 mt-4">
          <i className="fab fa-html5 text-red-600 text-5xl"></i>
          <i className="fab fa-css3-alt text-blue-500 text-5xl"></i>
          <i className="fab fa-js text-yellow-500 text-5xl"></i>
          <i className="fab fa-react text-blue-300 text-5xl"></i>
        </div>
      </div>
    </div>
  </section>
);

export default About;
