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
  }, [category]);

  if (productos) {
    return (
      <div>
        <a href="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/231/420/non_2x/arrow-back-icon-which-is-suitable-for-commercial-work-and-easily-modify-or-edit-it-vector.jpg"
            alt="Back"
            className={styles["back-arrow"]}
          />
        </a>
        <h1 className={styles["category-title"]}>titulo de categoria</h1>
        <div className={styles["products-container"]}>
          {productos.map((p) => (
            <div className={styles["product-wrapper"]} key={p.id}>
              <img src={p.imageUrl} alt={p.name} />
              <p>{p.name}</p>
              <p>{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>404</div>;
};

export default Categoria;

