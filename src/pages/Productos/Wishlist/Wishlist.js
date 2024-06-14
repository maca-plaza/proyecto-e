import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Wishlist = ({ userId }) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const fetchWishlist = async () => {
            const response = await axios.get(`http://localhost:3000/wishlist/${userId}`);
            setWishlist(response.data);
        };
        fetchWishlist();
    }, [userId]);

    return (
        <div>
            <h1>Lista de Deseos</h1>
            <ul>
                {wishlist.map(item => (
                    <li key={item._id}>{item.productId}</li>
                ))}
            </ul>
        </div>
    );
};

export default Wishlist;
