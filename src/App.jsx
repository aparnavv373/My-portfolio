import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#16222A] to-[#3A6073] p-4">
      <Navbar />

      <div className="pt-24 flex flex-col gap-20">
        <Home />
        <About />
        <Education />
          <Skill />
          <Project />
          <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
