const Contact = () => {
  return (
    <>
      <div className="contact-clean">
        <form onSubmit={"return false"}>
          <h2 className="text-center">Tu consulta no molesta</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Correo"
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="Mensaje"
              rows="14"
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Enviar{" "}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
