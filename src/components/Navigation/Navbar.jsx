const Navbar = ()=>{
    return(
       <header id="header" className="header d-flex align-items-center">
       <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
      <a href="#index" className="logo d-flex align-items-center">
         <h1>Estudio sur <span>.</span></h1>
      </a>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="index.html" className="active">Inicio</a></li>
          <li><a href="#about">Acerca de mi</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li className="dropdown"><a href="#"><span>Dropdown profundo</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Opcion uno</a></li>
                  <li><a href="#">Opcion dos</a></li>
                  <li><a href="#">Opcion tres</a></li>
                  <li><a href="#">Opcion cuatro</a></li>
                  <li><a href="#">Opcion cinco</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>

    </div>
  </header>
   );
}

export default Navbar;