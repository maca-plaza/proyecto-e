import Phaser from 'phaser';
export function moveEnemy(enemy, path) {
    if (!enemy.pathIndex) enemy.pathIndex = 0;
    const target = path[enemy.pathIndex];
  
    if (enemy.x < target.x) enemy.x += 1;
    else if (enemy.x > target.x) enemy.x -= 1;
  
    if (enemy.y < target.y) enemy.y += 1;
    else if (enemy.y > target.y) enemy.y -= 1;
  
    if (Phaser.Math.Distance.Between(enemy.x, enemy.y, target.x, target.y) < 5) {
      enemy.pathIndex++;
      if (enemy.pathIndex >= path.length) enemy.pathIndex = 0;
    }
  }
  
  export function attackEnemy(tower, enemiesArray, scene) {
    const range = 100;
    const damage = 10 * tower.level;
  
    enemiesArray.forEach((enemy) => {
      if (Phaser.Math.Distance.Between(tower.x, tower.y, enemy.x, enemy.y) < range) {
        const projectile = scene.add.sprite(tower.x, tower.y, 'projectile');
        scene.physics.moveTo(projectile, enemy.x, enemy.y, 300);
  
        scene.time.addEvent({
          delay: 500,
          callback: () => {
            if (Phaser.Math.Distance.Between(projectile.x, projectile.y, enemy.x, enemy.y) < 10) {
              enemy.health -= damage;
              if (enemy.health <= 0) {
                enemy.destroy();
                scene.sustainabilityPoints += 10;
                scene.sustainabilityText.setText(`Puntos de Sostenibilidad: ${scene.sustainabilityPoints}`);
              }
            }
            projectile.destroy();
          }
        });
      }
    });
  }
  