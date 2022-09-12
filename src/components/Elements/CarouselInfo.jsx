import Carousel from "react-bootstrap/Carousel";
import AboutMe from "../Sections/AboutMe";
import carouselImage1 from "../../assets/image1.png";
import carouselImage3 from "../../assets/ImageAboutUs.jpeg";

function CarouselInfo() {
  return (
    <div className="carousel-about-us">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item interval={4000}>
          <AboutMe
            title={"Andrea Videla"}
            description={"lOREM IMPSUM BLAMSDASDAKSLD"}
            image={carouselImage1}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <AboutMe
            title={"iVAN AKMAZAN"}
            description={"lOREM IMPSUM BLAMSDASDAKSLD"}
            image={carouselImage1}
          />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <AboutMe
            title={"Ivan Almazan y Andrea Videla"}
            description={"lOREM IMPSUM BLAMSDASDAKSLD"}
            image={carouselImage3}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselInfo;
