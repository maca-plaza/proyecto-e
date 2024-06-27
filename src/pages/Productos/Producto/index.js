import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>; // Muestra un mensaje de carga mientras se obtiene el producto
  }

  const {
    productId,
    name,
    description,
    price,
    imageUrl,
    category,
    productUrl,
    brand,
    
  } = producto;

  return (
    <div className={styles["product-page"]}>
      <div className={styles["breadcrumb"]}>
        <Link to={`/productos/categoria/${category}`}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/007/231/420/non_2x/arrow-back-icon-which-is-suitable-for-commercial-work-and-easily-modify-or-edit-it-vector.jpg"
            alt="Back"
            className={styles["back-arrow"]}
          />
        </Link>
        <span>{category} / {name}</span>
      </div>
      <div className={styles["product-container-22"]}>
        <div className={styles["product-image-container"]}>
          <img src={imageUrl} alt={name} />
        </div>
        <div className={styles["product-details"]}>
          <h2>{name}</h2>
          <p className={styles["product-description"]}>{description}</p>
          <div className={styles["product-brand-container"]}>
            <a
              href={productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles["product-brand-button"]}
            >
              {brand}
            </a>
          </div>
          <p className={styles["product-price"]}>$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Producto;


