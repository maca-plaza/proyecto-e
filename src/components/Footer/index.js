import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <img src="eficiencia energetica/LogoBlanco.png" alt="" />
        </div>
        <form id="form">
          <div className="subtitulo_formulario">
            <h1>¿Quieres ofrecer tus servicios?</h1>
            <p>Registra tus datos y nos pondremos en contacto contigo</p>
          </div>
          <div className="mb-0">
            <label for="exampleFormControlInput1" class="form-label"></label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="ejemplo@gmail.com"
            />
          </div>
          <div className="mb-0">
            <label for="exampleFormControlTextarea1" class="form-label"></label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
              placeholder="Cuéntanos brevemente sobre tus productos"
            ></textarea>
            <button type="submit" class="btn">
              Enviar
            </button>
            <p className="warnings" id="warnings"></p>
          </div>
        </form>
        <div className="contacto">
          <h2>Síguenos</h2>
          <div className="redes_contacto">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="info_contacto">
            <p>energizatec@gmail.com</p>
            <p>+560 55555555</p>
          </div>
          <div className="derechos">
            <p>© 2024 Energiza Tech. Todos los derechos reservados</p>
          </div>
        </div>
        <div className="flecha">
          <i className="fa-solid fa-circle-arrow-up"></i>
        </div>
      </footer>
      <Outlet />
    </>
  );
};

export default Footer;
