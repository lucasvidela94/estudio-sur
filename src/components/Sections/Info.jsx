import Item from "../Elements/Item";

const Info = () => {
  return (
    <>
      <section id="asesorias" className="menu">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Mis productos</h2>
            <p>
              Revisa nuestro <span>inventario</span>
            </p>
          </div>

          <ul
            className="nav nav-tabs d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <li className="nav-item">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#menu-starters"
              >
                <h4>Todos</h4>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-breakfast"
              >
                <h4>Pinturas</h4>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-lunch"
              >
                <h4>Asesorias</h4>
              </a>
            </li>

            {/* <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#menu-dinner"
              >
                <h4>Dinner</h4>
              </a>
            </li> */}
          </ul>

          <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
            <div className="tab-pane fade active show" id="menu-starters">
              <div className="tab-header text-center">
                <p>Todos</p>
                <h3>Construccion</h3>
              </div>

              <div className="row gy-5">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </div>
            <div className="tab-pane fade" id="menu-breakfast">
              <div className="tab-header text-center">
                <p>Pinturas</p>
                <h3>Todos los colores</h3>
              </div>

              <div className="row gy-5">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </div>
            <div className="tab-pane fade" id="menu-lunch">
              <div className="tab-header text-center">
                <p>Asesorias</p>
                <h3>Todas</h3>
              </div>

              <div className="row gy-5">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </div>
            <div className="tab-pane fade" id="menu-dinner">
              <div className="tab-header text-center">
                <p>Menu</p>
                <h3>Dinner</h3>
              </div>

              <div className="row gy-5">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
