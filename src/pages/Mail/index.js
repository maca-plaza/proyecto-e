import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEnvelope,
  faEnvelopeOpen,
  faGreaterThan,
  faLessThan,
  faSkull,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const Mail = () => {
  const [contacts, setContacts] = useState([]);
  const [status, setStatus] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState([]);

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

  const toggleSelectAll = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map(contact => contact._id));
    }
  };

  const handleSelect = (id) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(contactId => contactId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };

  const updateContacts = async (action, value = true) => {
    try {
      await Promise.all(selectedContacts.map(async (id) => {
        const response = await fetch(`http://localhost:4200/contact/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ [action]: value }),
        });
        if (!response.ok) {
          throw new Error(`Fallo en actualizar mail ${id}`);
        }
      }));
      setContacts(contacts.map(contact => selectedContacts.includes(contact._id) ? { ...contact, [action]: value } : contact));
      setSelectedContacts([]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = () => {
    updateContacts('eliminado');
  };

  const handleDeletePermanently = async () => {
    try {
      await Promise.all(selectedContacts.map(async (id) => {
        const response = await fetch(`http://localhost:4200/contact/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Fallo en eliminar ${id}`);
        }
      }));
      setContacts(contacts.filter(contact => !selectedContacts.includes(contact._id)));
      setSelectedContacts([]);
    } catch (e) {
      console.error(e);
    }
  };

  const handleMarkAsNew = () => {
    updateContacts('leido', false);
  };

  const handleMarkAsRead = () => {
    updateContacts('leido', true);
  };

  const handleAddToFavorites = () => {
    // Aquí iría la lógica para agregar los contactos a favoritos
    updateContacts('favorito');
  };

  const toggleFavorite = async (id) => {
    try {
      const contact = contacts.find(c => c._id === id);
      const newFavoriteStatus = !contact.favorito;
      const response = await fetch(`http://localhost:4200/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ favorito: newFavoriteStatus }),
      });
      if (response.ok) {
        setContacts(contacts.map(contact => contact._id === id ? { ...contact, favorito: newFavoriteStatus } : contact));
      } else {
        throw new Error(`Failed to update contact ${id}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (contacts.length > 0) {
    return (
      <div className={styles["contact-box"]}>
        <div className={styles["contact-sidebar"]}>
          <button onClick={() => setStatus("")}>Todos</button>
          <button onClick={() => setStatus("no_leido")}>No Leído</button>
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
                <FontAwesomeIcon icon={faCheckSquare} title={"marcar todos"} onClick= {toggleSelectAll} />
                <FontAwesomeIcon icon={faEnvelope} title={" NO leido"} onClick= {handleMarkAsNew} />
                <FontAwesomeIcon icon={faEnvelopeOpen} title={"marcar leído"} onClick= {handleMarkAsRead}/>
                <FontAwesomeIcon icon={faTrash} title={"Eliminar"} onClick= {handleDelete}/>
                {status === 'eliminado' && (
                  <FontAwesomeIcon 
                    icon={faSkull} 
                    title="Eliminar definitivamente" 
                    onClick={handleDeletePermanently} />
                  )}
                <FontAwesomeIcon icon={faStar} title={"Marcar como Spam"} onClick={handleAddToFavorites}  />
              </div>
            </div>
            <div className={styles["container-paginador"]}>
              <span>1-20</span>
              <FontAwesomeIcon icon={faLessThan} />
              <FontAwesomeIcon icon={faGreaterThan} />
            </div>
          </div>
          <div className={styles["contacts-wrapper"]}>
            {contacts.map((c) => (
              <div className={styles["contact-wrapper"]} key={c._id}>
                <span className={styles["actions-contact"]}>
                  <input type="checkbox" checked={selectedContacts.includes(c._id)} 
                    onChange={() => handleSelect(c._id)} 
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{ color: c.favorito ? 'yellow' : 'gray' }} 
                    onClick={() => toggleFavorite(c._id)} 
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
