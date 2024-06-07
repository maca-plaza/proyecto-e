import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Embed = ({ icon, title, paragraph, link }) => {
  return (
    <div className={styles["exploradores-container"]}>
      <FontAwesomeIcon icon={icon} size="2x" color="#FBD914" />
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <Link to={link} className={styles["link"]}>Ver más</Link>
    </div>
  );
};

export default Embed;
