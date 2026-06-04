import Contact from "./components/Contact";
import Education from "./components/Education";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    // bg-[#030712]
    <div className="relative min-h-screen text-white bg-[#030712]">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Events/>
      <Education/>
      <Contact/>
    </div>
  );
}

export default App;