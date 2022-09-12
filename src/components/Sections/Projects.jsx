import Card from "../Elements/Card";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="about">
        <div className="section-header">
          <h2 className="section-header-title">Trabajos </h2>
          <p>
            Consequatur libero assumenda est voluptatem est quidem illum et
            officia imilique qui vel architecto accusamus fugit aut qui
            distinctio
          </p>
        </div>

        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          <ul
            className="portfolio-flters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              Todos mis trabajos
            </li>
            <li data-filter=".filter-remodeling">Remodelacion</li>
            <li data-filter=".filter-construction">Construccion</li>
            <li data-filter=".filter-repairs">Asesorias</li>
            <li data-filter=".filter-design">Diseño de interiores</li>
          </ul>

          <div
            className="row gy-4 portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />
            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />

            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />

            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />

            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />

            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />
            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />

            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />

            <Card
              name={"El perrito uiuiui"}
              image={
                "https://i.pinimg.com/736x/c4/8d/ae/c48dae31367043443436e01abf1d0f06.jpg"
              }
              description={"Es un perrito muy bonito"}
              title={"Es medio malito eso si"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
