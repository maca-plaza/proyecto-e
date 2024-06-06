import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
const Card = ({ icon, title, paragraph }) => {
  return (
    <div className={styles["card-container"]}>
      <FontAwesomeIcon icon={icon} size="2x" color="#FBD914" />
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default Card;
