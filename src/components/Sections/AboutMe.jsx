import AboutMeImage from "../../assets/image1.png";

const AboutMe = ({ image, title, description, networks }) => {
  return (
    <>
      <section id="about" className="about ">
        <div className="container" data-aos="fade-up">
          <div className="row no-gutters">
            <div className="col-lg-6 video-box">
              <img src={image} className="img-fluid about_me_image" alt="" />
            </div>

            <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
              <div className="section-title">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i className="bx bx-fingerprint"></i>
                </div>
                <h4 className="title">
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p className="description">
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>

              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i className="bx bx-gift"></i>
                </div>
                <h4 className="title">
                  <a href="">Nemo Enim</a>
                </h4>
                <p className="description">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
