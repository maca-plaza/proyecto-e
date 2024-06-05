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
  };

  const cards = [
    {
      icon: faSun,
      title: "Sol",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum accusantium cum officiis alias, voluptate sit exercitationem doloribus nesciunt aliquid cumque totam perferendis sequi ipsam!",
    },
    {
      icon: faWind,
      title: "Viento",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam harum accusantium cum officiis alias, voluptate sit exercitationem doloribus nesciunt aliquid cumque totam perferendis sequi ipsam!",
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
    </div>
    /* <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="main-section">
          <img src="/placeholder.svg" alt="Energía Renovable" className="main-image" />
          <div className="main-overlay">
            <div className="container main-content">
              <h1 className="main-title">Impulsando un Futuro Sostenible</h1>
              <p className="main-subtitle">Descubre el poder de las soluciones de energía renovable y cómo pueden transformar tu comunidad.</p>
              <div className="main-buttons">
                <Link href="#" className="button-primary" prefetch={false}>Aprende Más</Link>
                <Link href="#" className="button-secondary" prefetch={false}>Involúcrate</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="content-section">
          <div className="container content-container">
            <div className="content-header">
              <h2 className="content-title">Soluciones de Energía Renovable</h2>
              <p className="content-subtitle">Explora las diferentes tecnologías de energía renovable y cómo pueden impulsar un futuro sostenible.</p>
            </div>
            <div className="grid">
              <div className="grid-item">
                <FontAwesomeIcon icon={faSun} className="grid-icon" />
                <h3 className="grid-title">Energía Solar</h3>
                <p className="grid-text">Aprovecha el poder del sol para generar electricidad limpia y renovable.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faWind} className="grid-icon" />
                <h3 className="grid-title">Energía Eólica</h3>
                <p className="grid-text">Captura el poder del viento para generar electricidad renovable.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faWater} className="grid-icon" />
                <h3 className="grid-title">Energía Hidroeléctrica</h3>
                <p className="grid-text">Aprovecha el poder del agua corriente para generar electricidad renovable.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faLeaf} className="grid-icon" />
                <h3 className="grid-title">Bioenergía</h3>
                <p className="grid-text">Convierte materia orgánica en fuentes de energía renovable como los biocombustibles.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faBolt} className="grid-icon" />
                <h3 className="grid-title">Energía Geotérmica</h3>
                <p className="grid-text">Aprovecha el calor natural de la Tierra para generar electricidad renovable.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faBatteryFull} className="grid-icon" />
                <h3 className="grid-title">Almacenamiento de Energía</h3>
                <p className="grid-text">Almacena energía renovable para usarla cuando más se necesita.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits-section">
          <div className="container benefits-container">
            <div className="benefits-header">
              <h2 className="benefits-title">Los Beneficios de la Energía Renovable</h2>
              <p className="benefits-subtitle">La energía renovable proporciona una multitud de beneficios, desde la reducción de emisiones de carbono hasta la mejora de la salud pública y la creación de empleos.</p>
            </div>
            <div className="grid">
              <div className="grid-item">
                <FontAwesomeIcon icon={faHospital} className="grid-icon" />
                <h3 className="grid-title">Mejora de la Salud Pública</h3>
                <p className="grid-text">Reduce la contaminación del aire y del agua, mejorando los resultados de salud para las comunidades.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faDollarSign} className="grid-icon" />
                <h3 className="grid-title">Crecimiento Económico</h3>
                <p className="grid-text">Crea empleos y estimula el crecimiento económico a través de inversiones en energía renovable.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faFan} className="grid-icon" />
                <h3 className="grid-title">Independencia Energética</h3>
                <p className="grid-text">Reduce la dependencia de combustibles importados y aumenta la seguridad energética.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faUsers} className="grid-icon" />
                <h3 className="grid-title">Empoderamiento de la Comunidad</h3>
                <p className="grid-text">Involucra a las comunidades en la transición hacia la energía sostenible y empodera la toma de decisiones local.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faShieldAlt} className="grid-icon" />
                <h3 className="grid-title">Resiliencia Climática</h3>
                <p className="grid-text">Mejora la resiliencia de los sistemas energéticos frente a los impactos climáticos y eventos climáticos extremos.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
              <div className="grid-item">
                <FontAwesomeIcon icon={faBolt} className="grid-icon" />
                <h3 className="grid-title">Huella de Carbono Reducida</h3>
                <p className="grid-text">Reduce significativamente las emisiones de carbono en comparación con los combustibles fósiles, ayudando a mitigar el cambio climático.</p>
                <Link href="#" className="grid-link" prefetch={false}>Aprende Más</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div> */
  );
}
