import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Preloader from "./Preloader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const elements = document.querySelectorAll(
    ".about, .skills, .projects, .contact, .project-card, .skill-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    element.classList.add("scroll-reveal");
    observer.observe(element);
  });

  return () => observer.disconnect();
  }, []);

  return (
    <>
      {loading && (
        <Preloader onFinish={() => setLoading(false)} />
      )}

      <div className={loading ? "portofolio-hidden" : "portofolio-show"}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;