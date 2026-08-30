import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="app">
      <div className="portfolio-shell">
        <Navbar />

        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
