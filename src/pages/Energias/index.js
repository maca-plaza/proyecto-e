import { Link } from "react-router-dom";
import {
  faSun,
  faWind,
  faWater,
  faLeaf,
  faBolt,
  faBatteryFull,
  faHospital,
  faDollarSign,
  faFan,
  faUsers,
  faShieldAlt,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import Card from "./components/Card";
import Header from "../../components/Header";
import Climatico from "./pages/Climatico";

export default function Energias() {
  const constants = {
    ACTIONS: {
      LEARN_MORE: "Aprende Más",
      ENVOLVED: "Involúcrate",
    },
    CARDS: {
      TITLE: "Impulsando un Futuro Sostenible",
      BADGE: "Beneficios de las Energías Renovables",
      DESCRIPTION:
        "Explora las diferentes tecnologías de energía renovable y cómo pueden impulsar un futuro sostenible.",
    },
    SUMMARY: {
      TITLE: "Explorar el IMPACTO de energía renovable",
      BADGE: "Tecnologías de energías renovables",
      DESCRIPTION:
        "Desde paneles solares hasta turbinas eólicas, ofrecemos una amplia gama de tecnologías de energía renovable para satisfacer sus necesidades. Obtenga más información sobre las diferentes opciones y cómo pueden beneficiar su hogar, negocio o comunidad.",
    },
  };
  const HEADER = [
    {
      titulo: "ENERGIAS",
      titulo2: "RENOVABLES",
      info: "Las energías renovables son fuentes de energía que se obtienen de recursos naturales como el sol, el viento, el agua y la biomasa. Estas fuentes son inagotables y no contaminantes, lo que las convierte en una alternativa sostenible y respetuosa con el medio ambiente.",
    },
  ];
  const cards = [
    {
      icon: faWind,
      title: "Menos Emisiones de CO2:",
      paragraph:
        "Al reemplazar los combustibles fósiles con energías renovables, se disminuyen significativamente las emisiones de dióxido de carbono y otros gases de efecto invernadero.",
    },
    {
      icon: faLeaf,
      title: "Conservación de Recursos Naturales:",
      paragraph:
        "Las energías renovables no agotan los recursos naturales, preservando los ecosistemas y la biodiversidad.",
    },
    {
      icon: faFan,
      title: "Reducción de Contaminación:",
      paragraph:
        "Estas fuentes de energía producen menos contaminación del aire y del agua, mejorando la         calidad ambiental y la salud pública.",
    },
  ];
  const CARDS2 = [
    {
      icon: faUsers,
      title: "Educación y Conciencia:",
      paragraph:
        "Promover el uso de energías renovables fomenta una mayor conciencia ambiental y educa a la población sobre prácticas sostenibles.",
    },
    {
      icon: faHospital,
      title: "Mejora de la Salud Pública:",
      paragraph:
        "Al disminuir la contaminación del aire, se reducen las enfermedades respiratorias y cardiovasculares relacionadas con la quema de combustibles fósiles.",
    },
    {
      icon: faBatteryFull,
      title: "Acceso a Energía en Áreas Remotas:",
      paragraph:
        "Las tecnologías renovables, como los sistemas solares, pueden proporcionar electricidad a comunidades rurales y aisladas.",
    },
  ];

  const CARDS3 = [
    {
      icon: faWater,
      title: "Independencia Energética:",
      paragraph:
        "Reducir la dependencia de importaciones de combustibles fósiles fortalece la seguridad energética y económica de los países.",
    },
    {
      icon: faWallet,
      title: "Creación de Empleos:",
      paragraph:
        "El sector de las energías renovables genera empleo en la fabricación, instalación y mantenimiento de tecnologías verdes.",
    },
    {
      icon: faDollarSign,
      title: "Ahorro en Costos Energéticos:",
      paragraph:
        "Aunque la inversión inicial puede ser alta, las energías renovables suelen tener costos operativos bajos, lo que resulta en ahorros a largo plazo.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles["title-container"]} ${styles["flex-column"]}`}>
        <div>
          {HEADER.map((c) => (
            <Header {...c} />
          ))}
        </div>
        <div className={styles["action-container"]}>
          <button className={`${styles.button} ${styles["button-primary"]}`}>
            <Link to="/calculadora">{constants.ACTIONS.LEARN_MORE}</Link>
          </button>
          <button className={`${styles.button}`}>
          <Link to="/clima">{constants.ACTIONS.ENVOLVED}</Link>
          </button>
        </div>
      </div>
      <div className={`${styles["cards-container"]} ${styles["flex-column"]}`}>
        <div
          className={`${styles["cards-title-container"]} ${styles["flex-column"]}`}
        >
          {/* <span className={`${styles.button} ${styles["button-primary"]}`}>
            {constants.CARDS.BADGE}
          </span> */}
          <h1 className={styles["cards-title"]}>{constants.CARDS.TITLE}</h1>
          <p>{constants.CARDS.DESCRIPTION}</p>
        </div>
        <div className={styles["cards-wrapper"]}>
          <h1 className={`${styles["cards-subtitles"]}`}>
            Beneficios Ambientales:
          </h1>
          {cards.map((c) => (
            <Card {...c} />
          ))}
          <h1 className={`${styles["cards-subtitles"]}`}>
            Beneficios Sociales:
          </h1>
          <div className={styles["cards-wrapper"]}>
            {CARDS2.map((c) => (
              <Card {...c} />
            ))}
          </div>
          <h1 className={`${styles["cards-subtitles"]}`}>
            Beneficios Económicos:
          </h1>
          <div className={styles["cards-wrapper"]}>
            {CARDS3.map((c) => (
              <Card {...c} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${styles["summary-container"]} ${styles["flex-column"]}`}
      >
        <div
          className={`${styles["cards-title-container"]} ${styles["flex-column"]}`}
        >
          {/* <span className={`${styles.button} ${styles["button-primary"]}`}>
            {constants.SUMMARY.BADGE}
          </span> */}
          <h1 className={styles["cards-title"]}>{constants.SUMMARY.TITLE}</h1>
          <p className={styles["title-descripción"]}>
            {constants.SUMMARY.DESCRIPTION}
          </p>
        </div>
        <div className={styles["summary-container-other"]}>
          <div className={styles["summary-container-child"]}>
            <div>
              <h1>Energía Solar</h1>
              <p>
                Aprovecha la radiación solar para generar electricidad o calor
                mediante paneles solares fotovoltaicos y térmicos. El Explorador
                Solar es la herramienta pública más completa y detallada sobre
                el recurso solar en Chile.
              </p>
            </div>
            <div>
              <h1>Energía Eolica</h1>
              <p>
                Utiliza la fuerza del viento para mover aerogeneradores que
                producen electricidad.
              </p>
            </div>
            <div>
              <h1>Explorador de Energía Marina</h1>
              <p>
                Es una herramienta que permite explorar las características del
                recurso mareomotriz en Chile y estimar su potencial.
              </p>
            </div>
          </div>
          <div className={styles["summary-container-img"]}></div>
        </div>
      </div>

      <div className={`${styles["others-container"]} ${styles["flex-column"]}`}>
        {/* <span className={`${styles.button} ${styles["button-primary"]}`}>
          {"Involúcrate"}
        </span> */}
        <h1>Únete a la revolución de las energías renovables</h1>
        <p>
          Si eres propietario de una vivienda, de un negocio o un líder
          comunitario, hay muchas maneras de involucrarse en el movimiento de
          las energías renovables. Explora los recursos disponibles. Otros
          Enlaces de Interés
        </p>
        <div className={styles["action-container2"]}>
          <button className={`${styles.button} ${styles["button-primary2"]}`}>
            <a
              href="https://eolico.minenergia.cl/inicio"
              className="button-link"
            >
              Explorador Eólico
            </a>
          </button>
          <button className={`${styles.button}${styles["button-primary2"]}`}>
            <a href="https://sit.conaf.cl/" className="button-link">
              Explorador de Bioenergía Forestal
            </a>
          </button>
          <button className={`${styles.button} ${styles["button-primary2"]}`}>
            <a href="https://energia.gob.cl/" className="button-link">
              Ministerio de Energía
            </a>
          </button>
          <button className={`${styles.button}${styles["button-primary2"]}`}>
            <a href="https://www.cne.cl//" className="button-link">
              Comisión Nacional de Energía
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
