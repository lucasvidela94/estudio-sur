import Navbar from "./Navigation/Navbar";
import AboutMe from "./Sections/AboutMe";
import Contact from "./Sections/Contact";
import HeroSection from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Footer from "./Navigation/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
