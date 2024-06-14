import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./styles.module.css";

const Producto = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch("http://localhost:4200/products/" + id);
        if (response.ok) {
          setProducto(await response.json());
        }
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducto();
  }, []);

  const {
    productId,
    name,
    description,
    price,
    imageUrl,
    category,
    productUrl,
    brand,
  } = producto || {};

  return (
    <div className={styles["product-container"]}>
      <div className={styles["product-image-container"]}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles["product-properties"]}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{brand}</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default Producto;
