const Item = () => {
  return (
    <>
      {" "}
      <div className="col-lg-4 menu-item">
        <a href="assets/img/menu/menu-item-4.png" className="glightbox">
          <img
            src="https://i.ibb.co/8277bg9/Pngtree-color-painting-thick-paint-color-5794836.png"
            alt="Pngtree-color-painting-thick-paint-color-5794836"
            className="menu-img img-fluid"
          />
        </a>
        <h4>Titulo item</h4>
        <p className="ingredients">descripcion</p>
      </div>
    </>
  );
};

export default Item;
