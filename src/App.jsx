import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";
import About from "./sections/About";
function App() {
  return (
    <div className="app">
      <div className="portfolio-shell">
        <Navbar />

        <main>
          <Hero />
          <TechStack />
          <About />
        </main>
      </div>
    </div>
  );
}

export default App;
