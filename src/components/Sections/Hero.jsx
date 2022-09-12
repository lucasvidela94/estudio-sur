import CarouselImages from "../Elements/Carousel";

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container-fluid overflow-hidden p-0">
        <div className="row g-0">
          <div lc-helper="background" className="col-md-5 order-md-2">
            <CarouselImages />
          </div>

          <div
            className="col-md-6 order-md-1 my-auto text-center"
            style={{ padding: "10vw" }}
          >
            <div className="lc-block mb-3 hero-text">
              <div editable="rich">
                <h2>Estudio sur de arquitectura</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt enim ac augue suscipit rhoncus. Donec ante
                  erat, hendrerit sed eleifend et, dapibus at leo. Mauris
                  bibendum mi ut dui sagittis volutpat.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
