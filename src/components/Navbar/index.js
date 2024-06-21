import { Link, Outlet } from "react-router-dom";
import "./styles.css";
import SearchBar from "../Searchbar";
import React, {useState} from "react";
import LoginButton from "../Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleLoginClick = () => {
    console.log('Redirigir a la página de inicio de sesión');
  };


  return (
    <>
      <div className="header_nav">
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
          <div className="caja">
          <div className="navbar-buscador-container">
            <SearchBar />
          </div>
          <div className="navbar-contacto">
            <button className="navbar-btn-contacto">Contáctanos</button>
          </div>
          <div className="navbar-login-container">
          <LoginButton onLoginClick={handleLoginClick} />
          </div>
          </div>
        </div>
        <nav className="menu-navegacion" >   
          <ul className={`nav_items ${isOpen && "open"}`}>
            <li className="inicio">
              <Link to="/">Inicio </Link>
            </li>
            <li className="energetica">
              <Link to="/eficiencia">Eficiencia Energética </Link>
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
          <div className={`nav_toggle ${isOpen &&"open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          </nav>

      </div>
      <Outlet />
    </>
  );
};

export default Navbar;


