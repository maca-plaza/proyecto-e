import React, { useState } from 'react';
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
  const [showPassword, setShowPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, lastName, email, password, rut, google: false };

    try {
      const response = await fetch('/api/users/crear-usuario', {
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

  return (
    <body className="Fondo-register">
    <div className="register-container">
      <h2 className="crear-cuenta-register">Crear Cuenta</h2>
      {error && <p className="error-message-register">{error}</p>}
      {registered && <Navigate to="/wishlist" />}
      {!registered && (
        <form onSubmit={handleSubmit}>
          <div className="form-group-register">
            <label>Nombre</label>
            <input
              type="text-register"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-register">
            <label>Apellido</label>
            <input
              type="text-register"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-register">
            <label>Email</label>
            <input
              type="email-register"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group-register">
            <label>Contraseña</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          <div className="form-group-register">
            <label>RUT</label>
            <input
              type="text-register"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>
        </form>
      )}
      <Link to="/wishlist" className="button-register">Registrarse</Link>
    </div>
    </body>
  );
};

export default Register;