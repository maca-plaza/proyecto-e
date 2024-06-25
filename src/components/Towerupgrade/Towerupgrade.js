import React from 'react';

const TowerUpgrade = ({ name, cost, onUpgrade }) => {
  return (
    <div className="tower-upgrade">
      <span>{name} - ${cost}</span>
      <button onClick={onUpgrade}>Mejorar</button>
    </div>
  );
};

export default TowerUpgrade;
