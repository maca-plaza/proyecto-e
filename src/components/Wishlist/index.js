import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles.wishlist.css'; 
import { Link } from 'react-router-dom';

const HeartButton = () => {
   return (
    <Link to="/Wishlist" className="heart-button" >
      <FontAwesomeIcon icon={faHeart} className="heart-icon"/>
    </Link>
  );
};

export default HeartButton;