import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.card.css";
const Cardresiduos = ({ icon, title, paragraph }) => {
  return (
    <div className={styles["card-contenedor"]}>
      <FontAwesomeIcon icon={icon} size="2x" color="#FBD914" />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Cardresiduos;