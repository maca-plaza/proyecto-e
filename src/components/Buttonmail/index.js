import styles from "./styles.module.css";

const Buttonmail = ({ setStatus }) => {
  const buttons = [
    {
      label: "Todos",
      status: "",
    },
    {
      label: "No Leído",
      status: "leido=false",
    },
    {
      label: "Leído",
      status: "leido",
    },
    {
      label: "Importante",
      status: "favorito",
    },
    {
      label: "Eliminado",
      status: "eliminado",
    },
  ];
  return (
    <div className={styles["contact-box"]}>
      <div className={styles["contact-sidebar"]}>
        {buttons.map((b, i) => (
          <button
            key={i}
            className={styles["boton-contacto"]}
            onClick={() => setStatus(b.status)}
          >
            {b.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Buttonmail;
