import logo from "../Img/logo_horizontal.png";

export default function Navbar() {
  return (
    <>
    {/* -------- HEADER -------- */}
      <header className="header">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="titulo-header">MASCOTAS EN ADOPCIÓN</h1>
        <nav className="navbar">
          {/* <label for="menu-toggle" className="menu-label">
            <img src="img/menu.png" alt="menu" className="menu-icon" />
          </label> */}
          <input type="checkbox" id="menu-toggle" />
          {/* <ul class="navbar-list">
            <li>
              <a href="login.html">Login</a>
            </li>
            <li>
              <a href="registro.html">Registro</a>
            </li>
            <li>
              <a href="#about">Nosotros</a>
            </li>
            <li>
              <a href="#cards">Noticias</a>
            </li>
            <li>
              <a href="#contacto">Contactanos</a>
            </li>
          </ul> */}
        </nav>
      </header>
    </>
  );
}
