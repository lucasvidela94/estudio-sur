const Card = ({ name, description, image, title }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-construction">
      {/* it should have a prop for filter */}
      <div className="portfolio-content h-100">
        <img src={image} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h4> {name} </h4>
          <p>{description}</p>
          <a
            href={image}
            title={title}
            data-gallery="portfolio-gallery-construction"
            className="glightbox preview-link"
          >
            <i className="bi bi-zoom-in"></i>
          </a>
          <a href="project-details.html" title={title} className="details-link">
            <i className="bi bi-link-45deg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
