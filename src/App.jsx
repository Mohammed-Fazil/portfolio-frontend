import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
import Projects from "./sections/Projects";
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
        </main>
      </div>
    </div>
  );
}

export default App;
