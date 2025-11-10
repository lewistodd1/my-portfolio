import Particles from "./components/Particles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Particles />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="tech">
        <Tech />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}


