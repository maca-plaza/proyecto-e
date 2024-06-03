import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="navbar-upper-container">
          <div className="navbar-logo-container">
            <img
              src="https://lh3.google.com/u/0/d/1T-YLlloczjmODB8o49LDnCdhthxtUn5P=w1439-h753-iv1"
              alt="logo"
              className="casablanca"
            />
            <img
              src="https://lh3.google.com/u/0/d/1d2-SX2Karlmc9AI3FDqmVLN98FGLLpd5=w1439-h460-iv1"
              alt="Energiza Tech"
              className="logonombre"
            />
          </div>
          <div className="navbar-buscador-container">
            <input type="text" placeholder="¿Qué estás buscando?" />
          </div>
          <div className="navbar-contacto">
            <button className="navbar-btn-contacto">Contáctanos</button>
          </div>
          {/* <div className="overlap-4">
            <div className="cajabuscador">
              <div className="box">
                <input
                  className="buscador"
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  required
                />
              </div>
              <div className="search">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </div> */}
          {/* <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-8">Contáctanos</div>
              <div className="rectangle"></div>
            </div>
          </div> */}
        </div>
        <nav className="menu-navegacion">
          <ul>
            <li className="inicio">
              <Link to="/">Inicio </Link>
            </li>
            <li className="energetica">
              <Link to="/eficiencia">Eficiencia Energética </Link>
            </li>
            <li className="calculadora">
              <Link to="/calculadora">Calculadora Gasto Energético</Link>
            </li>
            <li className="residuos">
              <Link to="/residuos"> Gestión de Residuos </Link>
            </li>
            <li className="renovables">
              <Link to="/energias">Energías Renovables </Link>
            </li>
            <li className="sostenibles">
              <Link to="/productos">Productos Sostenibles </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
