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
    <img className="inicio-sesion-login" src="https://lh3.googleusercontent.com/fife/ALs6j_Ek8fYulbSq9_MidBN2zdy0syW6nIV6hc9frKxX3GwwaXh6Ms6kVsJkgrz21obwRa6pWzdHHlPcB8kUpcFDW7v1rLDMQvgVRl8FkHuq70clbAmvB37EQsuieHyHuWsp-x_eYCijCseLEt2cN2mwOT3JFuj2TX3SvEnXJyszLHfOaha1F78R7Jd6MYg34g8LjwGFF0vLmrEE--Q5Pwfy9BnF-U0Yer_oAxVJRpbrOEQJ36XppgELmYwinlzVfZz12sAr7tLnJBuBQ4rsy97YSq8_ha1fDylyW93rdA_Sw6y0-ezYqVqWcu8U6BFPrJO3G1R_HUKbkJJUw0uWFZD2u3bGcSM_xE_f4kZiI1bFUdPuRnpEJtaHe2ycyCfjigTEj6MrF_88YyDj5EkawP47VLrnLqLmDi2LPghBnEh3iLO9id-494xoRRX9nRKmdjP1EgxJ6QNXyuyVERM-ztMZKm0O2rEw7t7mFRWBuUgVnx3mxFzqpHVsm0wOBXdTCnDv5tWprMP9C2G335ANOIKD3tvqR5xLdUyQ1Ay5gNwwCYLUCf53EnzJVjI4uJ6qjuyQG9X7kMUnMqXwDiAhvqepyPnIda_HaaarXPBncgmZlifrQE6dOejWY91E-7P6a6U_nvHwf7WfjMYjJvMqBGDtXWdzj8bBD6i0_XpaYw5tLzBgWW6vbpNxGzm2FsNExU5mW-ME3rRRHEFvzGhqldkLJX2ytMMs4u_DCWC1e5zfKNuTNR1UO99B-JYlH2pbLvVW9RK09cziM5Gyg3A8nAHH2G7c4j42JBmjwX3QfZL89RFEhdU-yp4mj2NjdyxWY853V8BzDsdLng_q8E3otgJ1DnPDkz4lpYvMdqDB8d4ptO4318PxjOL7LcZGufs0F3QJgt3HssezdewWrgSjCrd8kjQrzx2kIVKCB2h0-jClF0hG0hWd0XA_mPhYBMVHj_umtejcATepTZNn1K9NZNjHTeXINFZcC7pPN1p3EwyDv8-iUSTK4L0yNup8CMYjHJPahb3QUzCznKfs-roNtoUVJHBTLN5cxQ5cnZ8nt8FtnfOw2ID9HJbjbj9CSzVF9EVGw8rw7h6OUMcOYi9rNY65h-i9qYcKpFv7FFKNZYJuxwa3Lll1_fBkfCp7VCf-pxiNTAUHFAkdJwyDJZZ7ifLnxTlZcPkpd3BMzZ29A-NHnjOuwQElQrYkcs0ZUyLWZ33CAiOYxxsRxVzw4cOHtBHqWOx2rmxnXGSdOqlhmtqWTnYmTDC2DI0U3IaezezGsPPZ0hIp0ZnM2uD6m5h-jEi6Vm1hKjMTQwwotexrZDk9lVp7d9nI4P94wL2pHV_f81VcqhGTfsDoZKZGKmrvajZSc5WMvk92ucJ68vWwEKrjwRkXzActHT0tjNOtZOuuJjjFfILcLFTg6yJI4AbVhAYIXi2EU9_0Q67oWi0tye5Ev906oIBkEW3goz7Ufiw2QXCwoUei_yUXisswwua_gETHuCrag24QmTfDAWYMb35RvSgFgHXpagn4R9BVSyePv6_Go24l1BnB9H2daN2BE2Df4FFO6o1RLA9GWYztyWZCjEtRWrctLmFiMDpSX2oLdyJoEVKHsVTh5ME9KukX=w1920-h838"/>
      <h2 className="crear-cuenta-register">Crear tu cuenta aquí</h2>
      {error && <p className="error-message-register">{error}</p>}
      {registered && <Navigate to="/wishlist" />}
      {!registered && (
        <form onSubmit={handleSubmit}>
          <div className="form-group-register">
            <label>Nombre*</label>
            <input
              type="text-register"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-register">
            <label>Apellido*</label>
            <input
              type="text-register"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-register">
            <label>Email*</label>
            <input
              type="email-register"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group-register">
            <label>Contraseña*</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          </div>
          *campos obligatorios
        </form>
      )}
      <Link to="/wishlist" className="button-register">Regístrate aquí</Link>
    </div>
    </body>
  );
};

export default Register;