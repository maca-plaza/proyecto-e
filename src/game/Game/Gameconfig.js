import Phaser from 'phaser';
import create from "./Create";
import preload from "./Preload";
import update from "./Update";

const gameConfig = (setLife, setMoney) => ({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: {
    preload: preload(setLife, setMoney),
    create: create(setLife, setMoney),
    update: update(setLife, setMoney)
  }
});

export default gameConfig;
