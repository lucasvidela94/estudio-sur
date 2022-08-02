const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container-fluid overflow-hidden p-0">
        <div className="row g-0">
          <div
            lc-helper="background"
            className="col-md-6 order-md-2"
            style={{
              minHeight: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage:
                "url('https://i.ibb.co/XFs2W0T/286994519-5126948490753517-5830044143038841843-n.jpg')",
            }}
          ></div>

          <div
            className="col-md-6 order-md-1 my-auto text-center"
            style={{ padding: "10vw" }}
          >
            <div className="lc-block mb-3" style={{ color: "whitesmoke" }}>
              <div editable="rich">
                <h2>Andrea Videla</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam tincidunt enim ac augue suscipit rhoncus. Donec ante
                  erat, hendrerit sed eleifend et, dapibus at leo. Mauris
                  bibendum mi ut dui sagittis volutpat.{" "}
                </p>
              </div>
            </div>

            <div className="lc-block">
              <a
                className="carousel-control-prev"
                href="#hero-carousel"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bi bi-chevron-left"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
