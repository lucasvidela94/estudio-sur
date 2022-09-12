import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/carousel1.jpeg";
import carousel2 from "../../assets/carousel2.jpg";
import carousel3 from "../../assets/carousel3.jpg";

function CarouselImages() {
  return (
    <div className="w-100">
      <Carousel fade className="carousel-container" indicators={false}>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="carousel-text">
              <h3>text label example1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={carousel2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carousel-text">
              <h3>text label example2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image"
            src={carousel3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="carousel-text">
              <h3>text label example3</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselImages;
