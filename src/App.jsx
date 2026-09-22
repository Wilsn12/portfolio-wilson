import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Preloader from "./Preloader";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  return(
    <>
      {loading && <Preloader onFinish={() => setLoading(false)}/>}
    <div className={loading ? "portofolio-hidden" : "portofolio-show"}>
      <Preloader/>
      <Navbar /> 
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default App;