import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { gameconfig } from '../../game/gameconfig';

const PhaserGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new Phaser.Game(gameconfig);
    }

    return () => {
      gameRef.current.destroy(true);
    };
  }, []);

  return (
    <div id="phaser-game" />
  );
};

export default PhaserGame;