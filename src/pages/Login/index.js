import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

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
        navigate('/Inicio'); 
      } else {
        console.log('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error en la solicitud', error);
    }
  };

  return (
    <div className="login-container">
      <img className="inicio-sesion-login" src="https://lh3.googleusercontent.com/fife/ALs6j_Ek8fYulbSq9_MidBN2zdy0syW6nIV6hc9frKxX3GwwaXh6Ms6kVsJkgrz21obwRa6pWzdHHlPcB8kUpcFDW7v1rLDMQvgVRl8FkHuq70clbAmvB37EQsuieHyHuWsp-x_eYCijCseLEt2cN2mwOT3JFuj2TX3SvEnXJyszLHfOaha1F78R7Jd6MYg34g8LjwGFF0vLmrEE--Q5Pwfy9BnF-U0Yer_oAxVJRpbrOEQJ36XppgELmYwinlzVfZz12sAr7tLnJBuBQ4rsy97YSq8_ha1fDylyW93rdA_Sw6y0-ezYqVqWcu8U6BFPrJO3G1R_HUKbkJJUw0uWFZD2u3bGcSM_xE_f4kZiI1bFUdPuRnpEJtaHe2ycyCfjigTEj6MrF_88YyDj5EkawP47VLrnLqLmDi2LPghBnEh3iLO9id-494xoRRX9nRKmdjP1EgxJ6QNXyuyVERM-ztMZKm0O2rEw7t7mFRWBuUgVnx3mxFzqpHVsm0wOBXdTCnDv5tWprMP9C2G335ANOIKD3tvqR5xLdUyQ1Ay5gNwwCYLUCf53EnzJVjI4uJ6qjuyQG9X7kMUnMqXwDiAhvqepyPnIda_HaaarXPBncgmZlifrQE6dOejWY91E-7P6a6U_nvHwf7WfjMYjJvMqBGDtXWdzj8bBD6i0_XpaYw5tLzBgWW6vbpNxGzm2FsNExU5mW-ME3rRRHEFvzGhqldkLJX2ytMMs4u_DCWC1e5zfKNuTNR1UO99B-JYlH2pbLvVW9RK09cziM5Gyg3A8nAHH2G7c4j42JBmjwX3QfZL89RFEhdU-yp4mj2NjdyxWY853V8BzDsdLng_q8E3otgJ1DnPDkz4lpYvMdqDB8d4ptO4318PxjOL7LcZGufs0F3QJgt3HssezdewWrgSjCrd8kjQrzx2kIVKCB2h0-jClF0hG0hWd0XA_mPhYBMVHj_umtejcATepTZNn1K9NZNjHTeXINFZcC7pPN1p3EwyDv8-iUSTK4L0yNup8CMYjHJPahb3QUzCznKfs-roNtoUVJHBTLN5cxQ5cnZ8nt8FtnfOw2ID9HJbjbj9CSzVF9EVGw8rw7h6OUMcOYi9rNY65h-i9qYcKpFv7FFKNZYJuxwa3Lll1_fBkfCp7VCf-pxiNTAUHFAkdJwyDJZZ7ifLnxTlZcPkpd3BMzZ29A-NHnjOuwQElQrYkcs0ZUyLWZ33CAiOYxxsRxVzw4cOHtBHqWOx2rmxnXGSdOqlhmtqWTnYmTDC2DI0U3IaezezGsPPZ0hIp0ZnM2uD6m5h-jEi6Vm1hKjMTQwwotexrZDk9lVp7d9nI4P94wL2pHV_f81VcqhGTfsDoZKZGKmrvajZSc5WMvk92ucJ68vWwEKrjwRkXzActHT0tjNOtZOuuJjjFfILcLFTg6yJI4AbVhAYIXi2EU9_0Q67oWi0tye5Ev906oIBkEW3goz7Ufiw2QXCwoUei_yUXisswwua_gETHuCrag24QmTfDAWYMb35RvSgFgHXpagn4R9BVSyePv6_Go24l1BnB9H2daN2BE2Df4FFO6o1RLA9GWYztyWZCjEtRWrctLmFiMDpSX2oLdyJoEVKHsVTh5ME9KukX=w1920-h838"/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ingresa tu nombre de Usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Ingresa tu contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to="/wishlist" className="button-login" type="submit">Iniciar sesión</Link>
      </form>

      <div class="botones-container">
        <di>Si aún no tienes una cuenta, </di>
      <Link to="/Register" className="button-register1">regístrate aquí</Link>
      <Link to="../Mail/" className="button-register2">Ingreso Administrador</Link>
      </div>    
      </div>

  );
};

export default Login;
