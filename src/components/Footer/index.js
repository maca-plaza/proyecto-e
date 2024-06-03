import Form from "./components/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const icons = [
    { icon: faXTwitter, key: "tw" },
    { icon: faLinkedin, key: "ln" },
    { icon: faInstagram, key: "in" },
    { icon: faEnvelope, key: "mail" },
  ];

  const iconStyling = {
    size: "2x",
    color: "white",
  };
  return (
    <>
      <footer>
        <div className="logo">
          <div>
            <img
              src="https://lh3.google.com/u/0/d/1T-YLlloczjmODB8o49LDnCdhthxtUn5P=w1439-h753-iv1"
              alt="logo"
            />
            <img
              src="https://lh3.google.com/u/0/d/1d2-SX2Karlmc9AI3FDqmVLN98FGLLpd5=w1439-h460-iv1"
              alt="Energiza Tech"
            />
          </div>
        </div>
        <Form />
        <div className="contacto">
          <h2>Síguenos</h2>
          <div className="redes_contacto">
            {icons.map((i) => (
              <a key={i.key} href="#">
                <FontAwesomeIcon key={i.key} icon={i.icon} {...iconStyling} />
              </a>
            ))}
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
