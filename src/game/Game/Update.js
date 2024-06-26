import { moveEnemy, attackEnemy } from './Helpers';

const update = (setLife, setMoney) => function(time, delta) {
  const enemiesArray = this.enemies.getChildren();
  const towersArray = this.towers.getChildren();

  enemiesArray.forEach((enemy) => {
    moveEnemy(enemy, this.enemyPath);
  });

  towersArray.forEach((tower) => {
    attackEnemy(tower, enemiesArray, this);

    if (this.experiencePoints >= 100) {
      tower.level += 1;
      this.experiencePoints -= 100;
    }
  });

  this.sustainabilityText.setText('Puntos de Sostenibilidad: ' + this.sustainabilityPoints);
};

export default update;
