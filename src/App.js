import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/home.js";
import Navbar from "./components/navbar/navbar.js";
import Skills from "./components/skills/skills.js";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import ExtraCurriculars from "./components/extra-curriculars/extra-curriculars";
import ResearchPapers from "./components/research-papers/research-papers";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <div className="container">
        <Skills />
        <Experience />
        <Education />
        <ExtraCurriculars />
        <ResearchPapers />
      </div>
      <Footer />
    </>
  );
}

export default App;
