import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEnvelope,
  faEnvelopeOpen,
  faGreaterThan,
  faLessThan,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Mail = () => {
  const [contact, setContacts] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "http://localhost:4200/contact" + (status ? `?${status}=true` : "")
        );

        if (response.ok) {
          setContacts(await response.json());
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchContacts();
  }, [status]);

  if (contact) {
    return (
      <div className={styles["contact-box"]}>
        <div className={styles["contact-sidebar"]}>
          <button onClick={() => setStatus("")}>Todos</button>
          <button onClick={() => setStatus("leido")}>Leído</button>
          <button onClick={() => setStatus("favorito")}>
            Importante
          </button>
          <button onClick={() => setStatus("eliminado")}>
            Eliminado
          </button>
        </div>
        <div className={styles["contacts-container"]}>
          <div className={styles["first-row"]}>
            <div className={styles["title-icon-container"]}>
              <h2>Mensajes</h2>
              <div className={styles["icon-container"]}>
                <FontAwesomeIcon icon={faCheckSquare} title={"marcar todos"} />
                <FontAwesomeIcon icon={faEnvelopeOpen} title={"marcar leído"} />
                <FontAwesomeIcon icon={faTrash} title={"Eliminar"} />
                <FontAwesomeIcon icon={faTrash} title={"Marcar como Spam"} />
              </div>
            </div>
            <div className={styles["container-paginador"]}>
              <span>1-20</span>
              <FontAwesomeIcon icon={faLessThan} />
              <FontAwesomeIcon icon={faGreaterThan} />
            </div>
          </div>
          <div className={styles["contacts-wrapper"]}>
            {contact.map((c) => (
              <div className={styles["contact-wrapper"]} key={c._id}>
                <span className={styles["actions-contact"]}>
                  <input type="checkbox" />
                  <FontAwesomeIcon
                    icon={faStar}
                    fill="true"
                    style={{ fill: "yellow" }}
                  />
                </span>
                <div className={styles["info-container"]}>
                  <span title={c.email} className={styles.email}>
                    {c.email}
                  </span>
                  <span title={c.comment} className={styles.comment}>
                    {c.comment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <div>404</div>;
};

export default Mail;
