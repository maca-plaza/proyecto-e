

import { moveEnemy, attackEnemy } from './Helpers';

const update = (setLife, setMoney) => function(time, delta) {
  const enemiesArray = this.enemies.getChildren();
  const towersArray = this.towers.getChildren();


  // Mover enemigos a lo largo del camino definido
  enemiesArray.forEach((enemy) => {
    moveEnemy(enemy, this.enemyPath);
  });
  // Lógica de ataque de las torres a los enemigos
  towersArray.forEach((tower) => {
    attackEnemy(tower, enemiesArray, this);

    // Lógica para mejorar la torre si se cumple la condición
    if (this.experiencePoints >= 100) {
      tower.level += 1;
      this.experiencePoints -= 100;
    }
  });
   // Actualización del texto de sostenibilidad
  this.sustainabilityText.setText('Puntos de Sostenibilidad: ' + this.sustainabilityPoints);
};

export default update;
