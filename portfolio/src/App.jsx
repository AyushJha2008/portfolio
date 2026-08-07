import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {

  return (
    <div className="w-full overflow-x-hidden min-h-screen text-white bg-[#030712] relative">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Events />
      <Education />
      <Contact />
    </div>
  );
}

export default App;