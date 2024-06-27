import React, { useEffect } from 'react';
import Phaser from 'phaser';
import gameConfig from "./Gameconfig"; // Ajusta la ruta según la ubicación exacta

const Game = ({ setLife, setMoney }) => {
  useEffect(() => {
    const config = gameConfig(setLife, setMoney);

    const game = new Phaser.Game(config);

    return () => {
      // Limpia los recursos del juego al desmontar el componente
      game.destroy(true);
    };
  }, [setLife, setMoney]);

  return (
    <div id="game-container" style={{ width: '800px', height: '600px' }}>
    </div>
  );
};

export default Game;


