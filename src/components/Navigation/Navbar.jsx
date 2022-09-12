import { NavLink } from "react-router-dom";
import logo from "../../assets/react.svg";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top ">
      <div className="container container-navbar d-flex align-items-center justify-content-between">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <a href="/" className="logo">
            <img src={logo} alt="" className="img-fluid" />
          </a>
          <h1 className="logo">
            <NavLink to="/">Estudio sur</NavLink>
          </h1>
        </div>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Inicio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                Acerca de mi
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#projects">
                Trabajos
              </a>
            </li>
            <li>
              <a className="nav-link scrollto " href="#asesorias">
                Asesorias
              </a>
            </li>
            {/* <li className="dropdown"> 
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            */}
            <li>
              <NavLink className="nav-link scrollto" to="/contact">
                Contacto
              </NavLink>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
