import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import gameConfig from '../gameconfig'; // Ajusta la ruta según la ubicación exacta

const PhaserGame = ({ setLife, setMoney }) => {
  useEffect(() => {
    const config = gameConfig(setLife, setMoney);

    const game = new Phaser.Game(config);

    return () => {
      // Limpia los recursos del juego al desmontar el componente
      game.destroy(true);
    };
  }, [setLife, setMoney]);

  return (
    <div id="game-container">
      {/* Elemento donde se renderizará el juego */}
    </div>
  );
};
export default PhaserGame;