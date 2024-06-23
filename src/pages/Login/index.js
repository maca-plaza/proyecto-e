import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Usa useNavigate para la navegación

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { username, password };

    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        navigate('/Inicio'); // Corrige la redirección a '/Inicio' si la autenticación es exitosa
      } else {
        console.log('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="inicio-sesion-login">Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <Link to="/wishlist" className="button-login" type="submit">Iniciar sesión</Link>
      </form>
      <Link to="/Register" className="button-register1">Crear Usuario</Link>
    </div>
  );
};

export default Login;
