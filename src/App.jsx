import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  return (
    <div className="app">
      <div className="portfolio-shell">
        <Navbar />

        <main>
          <Hero />
          <TechStack />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
