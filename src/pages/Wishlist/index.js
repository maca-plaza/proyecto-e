import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";
import Header from "../../components/Header";

const Wishlist = () => {
  const HEADER = [
    {
      titulo: "Visita tu lista",
      titulo2: "de favoritos",
      info: "",
    },
  ];

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("http://localhost:4200/users" );
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
      <div className="wishlist-body">
        <div className="wishlist-Principal">
          <div className="wishlist-image">
            <div className="div">
              <div className="wishlist-image">
                <div>
                  {HEADER.map((c) => (
                    <Header {...c} />
                  ))}
                </div>
              </div>
            </div>
            <div className="wishlist-usuarios">
              <div>Visita tu lista de favoritos</div>
              <div className="container-list-wishlist"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Wishlist;
