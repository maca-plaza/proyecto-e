import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../Navbar/styles.css';

const LoginButton = () => {
    return (
      <Link to="/Login" className="login-button">
        <span className="login-icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        
      </Link>
    );
  };
  
  export default LoginButton;