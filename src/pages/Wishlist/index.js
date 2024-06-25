import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import './styles.css'; 
import Header from "../../components/Header";
import axios from "axios";

function Wishlist() {
  const HEADER = [
    {
      titulo: "Visita tu lista",
      titulo2: "de favoritos",
      info: "",
    },
  ];  
        
  const [productos, setProductos] = useState([]);
  
    useEffect(() => {
        
        axios.get('/server/db/models/wishlist.js')
            .then(response => {
                setProductos(response.data);
            })
            .catch(error => {
                console.error('Error fetching wishlist:', error);
            });
    }, []);

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
            <div className="container-list-wishlist">
           
            </div>
      </div>
    </div>
    </div>
    </div>
    );
}

export default Wishlist;
  