
import Header from "./components/Header"
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => (
  <div>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
