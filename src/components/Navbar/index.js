import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div class="overlap-2">
          <div class="overlap-3">
            <img
              src="/eficiencia energetica/CasaBlanca.png"
              alt="logo"
              class="casablanca"
            />
            <img
              src="/eficiencia energetica/LogoNombre.png"
              alt="Energiza Tech"
              class="logonombre"
            />
          </div>
          <div class="overlap-group-wrapper">
            <div class="overlap-group-2">
              <div class="text-wrapper-8">Contáctanos</div>
              <div class="rectangle"></div>
            </div>
          </div>
          <div class="overlap-4">
            <input
              class="buscador"
              type="text"
              placeholder="¿Qué estás buscando?"
              required
            />
            <img
              src="/eficiencia energetica/Search.png"
              alt="buscar"
              class="search"
            />
          </div>
        </div>
        <nav class="menu-navegacion">
          <ul>
            <li class="inicio">
              <Link to="/">Inicio </Link>
            </li>
            <li class="energetica">Eficiencia Energética</li>
            <li class="residuos">Gestión de Residuos</li>
            <li class="renovables">
              <Link to="/energias">Energías Renovables </Link>
            </li>
            <li class="sostenibles">Productos Sostenibles</li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
