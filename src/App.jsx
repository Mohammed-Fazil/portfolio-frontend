import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechStack from "./sections/TechStack";

function App() {
  return (
    <div className="app">
      <div className="portfolio-shell">
        <Navbar />

        <main>
          <Hero />
          <TechStack />
        </main>
      </div>
    </div>
  );
}

export default App;
