import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rut, setRut] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
  const handleSubmit = async () => {
    
    const newUser = { name, lastName, email, password, rut };

    try {
      const response = await fetch('http://localhost:4200/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      if (response.ok) {
        setRegistered(true);
      } else {
        setError(data.message || 'Error al crear el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
      setError('Error en la solicitud');
    }
  };
    handleSubmit();
  }, []);
  
  return (
    <div className="register-container">
      <h2>Crear tu cuenta aquí</h2>
      {error && <p className="error-message">{error}</p>}
      {registered && <Navigate to="/wishlist" />}
      {!registered && (
        <form onSubmit={setRegistered}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>RUT</label>
            <input
              type="text"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              required
            />
          </div>
          <button type="submit">Registrarse</button>
        </form>
      )}
      <Link to="/wishlist">Ir a la lista de deseos</Link>
    </div>
  );
};

export default Register;
