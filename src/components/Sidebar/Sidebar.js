import React from 'react';
import './Sidebar.css';

const Sidebar = ({ life, money, upgrades }) => {
  return (
    <div className="sidebar">
      <h2>Estado del Juego</h2>
      <div>
        <strong>Vida:</strong> {life}
      </div>
      <div>
        <strong>Dinero:</strong> ${money}
      </div>
      <h3>Mejoras Disponibles</h3>
      <ul>
        {upgrades.map((upgrade, index) => (
          <li key={index}>{upgrade.name} - ${upgrade.cost}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
