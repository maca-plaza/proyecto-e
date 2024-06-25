import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles.login.css';

const LoginButton = () => {
  return (
    <Link to="/Login" className="login-button">
      <FontAwesomeIcon icon={faUser} className="login-icon" />
    </Link>
  );
};

export default LoginButton;