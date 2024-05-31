import Form from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="logo">
          <img src="eficiencia energetica/LogoBlanco.png" alt="" />
        </div>
          <form id="form">
            <Form />
          </form>
        <div className="contacto">
          <h2>Síguenos</h2>
          <div className="redes_contacto">
            <i className="faTwitter"></i>
            <i className="faLinkedin-in"></i>
            <i className="faInstagram"></i>
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
    </>
  );
};

export default Footer;
