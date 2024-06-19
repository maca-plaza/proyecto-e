import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";


const Mail = () => {
  const [contact, setContacts] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "http://localhost:4200/contact" 
        );
        if (response.ok) {
          setContacts(await response.json());
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchContacts();
  }, [contact]);
  
  if (contact) {
    return (
      <div className = {styles[ "contact-box"]}>
        <div className={styles["contacts-sidebar"]}></div>
            <h3>Todos</h3>
            <p>Leido</p>
            <p>Importante</p>
            <p>Eliminado</p>
        <div className={styles["contacts-container"]}>
          {contact.map((c) => (
            <div className={styles["contact-wrapper"]} key={c._id}>
              <p> {c.email}</p>
              <p> {c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>404</div>;
  
};

export default Mail;
