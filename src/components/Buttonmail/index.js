import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const Buttonmail = () => {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "http://localhost:4200/contact" +
            (status
              ? status.includes("=")
                ? `?${status}`
                : `?${status}=true`
              : "")
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

  


  if (contacts) {
    return (
      <div className={styles["contact-box"]}>
        <div className={styles["contact-sidebar"]}>
          <button
            className={styles["boton-contacto"]}
            onClick={() => setStatus("")}
          >
            Todos
          </button>
          <button
            className={styles["boton-contacto"]}
            onClick={() => setStatus("leido=false")}
          >
            No Leído
          </button>
          <button
            className={styles["boton-contacto"]}
            onClick={() => setStatus("leido")}
          >
            Leído
          </button>
          <button
            className={styles["boton-contacto"]}
            onClick={() => setStatus("favorito")}
          >
            Importante
          </button>
          <button
            className={styles["boton-contacto"]}
            onClick={() => setStatus("eliminado")}
          >
            Eliminado
          </button>
        </div>
      </div>
    );
  }
};

export default Buttonmail;
