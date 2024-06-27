import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import  "./styles-wishlist.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Wishlist = () => {
  const [productos, setProductos] = useState(null);
  const { wishlist } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:4200/products/wishlist");

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
      <div>
        <div className={["arrow-title"]}>
          <a href="/Productos">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/231/420/non_2x/arrow-back-icon-which-is-suitable-for-commercial-work-and-easily-modify-or-edit-it-vector.jpg"
              alt="Back"
              className={["back-arrow-w"]}
            />
          </a>
          <h1 className={["category-title-w"]}>
            Productos Sostenibles{wishlist}
          </h1>
        </div>
        <div className={["products-container-w"]}>
          {productos.map((p) => (
            <div className={["product-wrapper-w"]} key={p._id}>
              <Link
                to={"/producto/" + p.productId}
                className={["product-link-w"]}
              >
                <img src={p.imageUrl} alt={p.name} />
                <p className={["products-parrafo"]}>{p.name}</p>
                <p className={["products-precio"]}>$ {p.price}</p>
                <Link to="" className="heart-button-w">
                  <FontAwesomeIcon icon={faHeart} className="heart-icon-w" />
                </Link>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>404</div>;
};

export default Wishlist;
