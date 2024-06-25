import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import './styles.css'; 
import axios from 'axios';
import Header from "../../components/Header";

function Wishlist() {
  const HEADER = [
    {
      titulo: "Visita tu lista",
      titulo2: "de favoritos",
      info: "",
    },
  ];
  
        
        
  const [productos, setProductos] = useState([]);
/* Falta el url de la api del backend
    useEffect(() => {
        
        axios.get('URL_DE_TU_API/wishlist')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching wishlist:', error);
            });
    }, []);
*/
    return (
    <div className="wishlist-body">
    <div className="wishlist-Principal">
      <div className="div">
        <div>
          {HEADER.map((c) => (
            <Header {...c} />
          ))}
        </div>
    </div>
        <div className="wishlist-usuarios">
          <div>Visita tu lista de favoritos</div>
            <div className="container-list-wishlist">
           
            </div>
      </div>
    </div>
    </div>
    );
}

export default Wishlist;
  