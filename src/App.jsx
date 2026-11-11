import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Work />
      </main>

      <Contact />
    </>
  );
}

export default App;
