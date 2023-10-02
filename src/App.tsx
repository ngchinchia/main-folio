import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import WorkExperience from "./pages/WorkExperience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="h-screen scroll-smooth scroll-m-11 snap-y snap-mandatory overflow-y-scroll overflow-x-hidden duration-700">
      <Header />
      <section id="/" className="snap-start">
        <Home />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="experience" className="snap-start">
        <WorkExperience />
      </section>
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      <section id="contact" className="snap-start">
        <Contact/>
      </section>
    </div>
   
  );
}

export default App;
