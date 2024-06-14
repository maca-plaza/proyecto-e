import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Producto = ({ product, userId }) => {
    const [isInWishlist, setIsInWishlist] = useState(false);

    const toggleWishlist = async () => {
        if (isInWishlist) {
            // Remover de la lista de deseos
            await axios.delete(`http://localhost:3000/wishlist/${product._id}`);
        } else {
            // Agregar a la lista de deseos
            await axios.post('http://localhost:3000/wishlist', { productId: product._id, userId });
        }
        setIsInWishlist(!isInWishlist);
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <FontAwesomeIcon
                icon={faHeart}
                onClick={toggleWishlist}
                style={{ color: isInWishlist ? 'red' : 'grey', cursor: 'pointer' }}
            />
        </div>
    );
};

export default Producto;
