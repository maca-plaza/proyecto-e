import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

const Categoria = () => {
  const [productos, setProductos] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          "http://localhost:4200/products/categoria/" + category
        );
        if (response.ok) {
          setProductos(await response.json());
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchProductos();
  }, []);

  if (productos) {
    return (
      <div className={styles["products-container"]}>
        {productos.map((p) => (
          <div className={styles["product-wrapper"]}>
            <img src={p.imageUrl} alt={p.name} />
            <p>{p.name}</p>
            <p>{p.price}</p>
          </div>
        ))}
      </div>
    );
  }

  return <div>404</div>;
};

export default Categoria;
