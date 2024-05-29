import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="overlap-2">
          <div className="overlap-3">
            <img
              src="/eficiencia energetica/CasaBlanca.png"
              alt="logo"
              className="casablanca"
            />
            <img
              src="/eficiencia energetica/LogoNombre.png"
              alt="Energiza Tech"
              className="logonombre"
            />
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="text-wrapper-8">Contáctanos</div>
              <div className="rectangle"></div>
            </div>
          </div>
          <div className="overlap-4">
            <input
              className="buscador"
              type="text"
              placeholder="¿Qué estás buscando?"
              required
            />
            <img
              src="/eficiencia energetica/Search.png"
              alt="buscar"
              className="search"
            />
          </div>
        </div>
        <nav className="menu-navegacion">
          <ul>
            <li className="inicio">
              <Link to="/">Inicio </Link>
            </li>
            <li className="energetica">
              <Link to= "/eficiencia" >Eficiencia Energética </Link></li>
            <li className="calculadora">
              <Link to= "/calculadora" >Calculadora Gasto Energético</Link></li>
            <li className="residuos">
              < Link to= "/residuos" > Gestión de Residuos </Link></li>
            <li className="renovables">
              <Link to="/energias">Energías Renovables </Link>
            </li>
            <li className="sostenibles">
              <Link to= "/productos" >Productos Sostenibles </Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
