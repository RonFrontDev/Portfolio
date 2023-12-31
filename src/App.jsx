import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Introduction from "./sections/Introduction/Introduction";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Introduction />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
