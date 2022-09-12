import AboutMe from "./AboutMe";
import HeroSection from "./Hero";
import Projects from "./Projects";
import Info from "./Info";
import CarouselInfo from "../Elements/CarouselInfo";

const Home = () => {
  return (
    <div style={{ width: "100vw" }}>
      <HeroSection />
      {/* <AboutMe /> */}
      <CarouselInfo />
      <Projects />
      <Info />
    </div>
  );
};

export default Home;
