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
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import Card from "./components/Card";

export default function Energias() {
  const constants = {
    TITLE: "Impulsando un Futuro Sostenible",
    DESCRIPTION:
      "Descubre el poder de las soluciones de energía renovable y cómo pueden transformar tu comunidad.",
    ACTIONS: {
      LEARN_MORE: "Aprende Más",
      ENVOLVED: "Involúcrate",
    },
    CARDS: {
      TITLE: "Soluciones de Energía Renovable",
      BADGE: "Benefits of Renewable Energy",
      DESCRIPTION:
        "Explora las diferentes tecnologías de energía renovable y cómo pueden impulsar un futuro sostenible.",
    },
    SUMMARY: {
      TITLE: "Explorar soluciones de energía renovable",
      BADGE: "Tecnologías de energías renovables",
      DESCRIPTION:
        "Desde paneles solares hasta turbinas eólicas, ofrecemos una amplia gama de tecnologías de energía renovable para satisfacer sus necesidades. Obtenga más información sobre las diferentes opciones y cómo pueden beneficiar su hogar, negocio o comunidad.",
        ACTIONS1: "Solar Power, Harness the power of the sun with our efficient solar panel systems.",
        ACTIONS2: "Aprende Más",
        ACTIONS3:"",
    },

  };

  const cards = [
    {
      icon: faSun,
      title: "Energía Solar",
      paragraph:
        "Aprovecha la radiación solar para generar electricidad o calor mediante paneles solares fotovoltaicos y térmicos.",
    },
    {
      icon: faWind,
      title: "Energía Eólica:",
      paragraph:
        "Utiliza la fuerza del viento para mover aerogeneradores que producen electricidad.",
    },
    {
      icon: faShieldAlt,
      title: "Escudo",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum accusantium cum officiis alias, voluptate sit exercitationem doloribus nesciunt aliquid cumque totam perferendis sequi ipsam!",
    },
    {
      icon: faLeaf,
      title: "Hoja",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum accusantium cum officiis alias, voluptate sit exercitationem doloribus nesciunt aliquid cumque totam perferendis sequi ipsam!",
    },
    {
      icon: faSun,
      title: "Sol2",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum accusantium cum officiis alias, voluptate sit exercitationem doloribus nesciunt aliquid cumque totam perferendis sequi ipsam!",
    },
    {
      icon: faSun,
      title: "Sol3",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum accusantium cum officiis alias, voluptate sit exercitationem doloribus nesciunt aliquid cumque totam perferendis sequi ipsam!",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={`${styles["title-container"]} ${styles["flex-column"]}`}>
        <h1>{constants.TITLE}</h1>
        <p>{constants.DESCRIPTION}</p>
        <div className={styles["action-container"]}>
          <button className={`${styles.button} ${styles["button-primary"]}`}>
            {constants.ACTIONS.LEARN_MORE}
          </button>
          <button className={`${styles.button}`}>
            {constants.ACTIONS.ENVOLVED}
          </button>
        </div>
      </div>
      <div className={`${styles["cards-container"]} ${styles["flex-column"]}`}>
        <div
          className={`${styles["cards-title-container"]} ${styles["flex-column"]}`}
        >
          <span className={`${styles.button} ${styles["button-primary"]}`}>
            {constants.CARDS.BADGE}
          </span>
          <h1 className={styles["cards-title"]}>{constants.CARDS.TITLE}</h1>
          <p>{constants.CARDS.DESCRIPTION}</p>
        </div>
        <div className={styles["cards-wrapper"]}>
          {cards.map((c) => (
            <Card {...c} />
          ))}
        </div>
      </div>
      <div
        className={`${styles["summary-container"]} ${styles["flex-column"]}`}
      >
        <div
          className={`${styles["cards-title-container"]} ${styles["flex-column"]}`}
        >
          <span className={`${styles.button} ${styles["button-primary"]}`}>
            {constants.SUMMARY.BADGE}
          </span>
          <h1 className={styles["cards-title"]}>{constants.SUMMARY.TITLE}</h1>
          <p>{constants.SUMMARY.DESCRIPTION}</p>
        </div>
        <div className={styles["summary-col"]}>

        </div>
      </div>
    </div>
  );
}
