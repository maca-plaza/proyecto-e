import Phaser from "phaser";

export function moveEnemy(enemy, path, setLife) {
  if (!enemy.pathIndex) enemy.pathIndex = 0;
  const target = path[enemy.pathIndex];

  if (enemy.x < target.x) enemy.x += 1;
  else if (enemy.x > target.x) enemy.x -= 1;

  if (enemy.y < target.y) enemy.y += 1;
  else if (enemy.y > target.y) enemy.y -= 1;

  // Si el enemigo ha llegado al punto de destino, pasar al siguiente
  if (Phaser.Math.Distance.Between(enemy.x, enemy.y, target.x, target.y) < 5) {
    if (target.damage) {
      setLife((p) => p - 10);
    }
    enemy.pathIndex++;
    if (enemy.pathIndex >= path.length) enemy.pathIndex = 0;
  }
}

export function attackEnemy(tower, enemiesArray, scene) {
  const range = 100;

  // Añadir un temporizador para controlar la frecuencia de disparo de la torre
  if (!tower.nextShotTime) {
    tower.nextShotTime = 0;
  }

  if (scene.time.now >= tower.nextShotTime) {
    let shotDelay = 500; // Retardo entre disparos inicial
    const speed = 200; // Velocidad de movimiento del proyectil

    enemiesArray.forEach((enemy) => {
      if (
        enemy.active &&
        Phaser.Math.Distance.Between(tower.x, tower.y, enemy.x, enemy.y) < range
      ) {
        const projectile = scene.physics.add.sprite(
          tower.x,
          tower.y,
          "projectile"
        );
        projectile.setScale(0.05); // Ajusta la escala del proyectil según tus necesidades
        scene.physics.add.existing(projectile); // Asegúrate de agregar el cuerpo físico al proyectil
        projectile.body.setCollideWorldBounds(true);

        scene.physics.moveTo(projectile, enemy.x, enemy.y, speed);

        scene.time.addEvent({
          delay: 500,
          callback: () => {
            if (
              projectile.active &&
              Phaser.Math.Distance.Between(
                projectile.x,
                projectile.y,
                enemy.x,
                enemy.y
              ) < 30
            ) {
              if (enemy.active) {
                enemy.health -= tower.damage;
                if (enemy.health <= 0) {
                  enemy.destroy();
                  scene.sustainabilityPoints += 10;
                }
              }
            }
            projectile.destroy();
          },
          callbackScope: scene,
        });

        // Establecer el tiempo para el próximo disparo de la torre
        tower.nextShotTime = scene.time.now + shotDelay; // Ajusta el intervalo de disparo (1000 ms = 1 segundo)
        shotDelay += 200; // Incrementa el retardo para el próximo proyectil
      }
    });
  }
}

export function levelUpTower(tower, money, setMoney) {
  const canUpgrade =
    ((tower.type === "solar" && money >= 100) ||
      (tower.type === "wind" && money >= 150)) &&
    tower.level < 5;

  if (canUpgrade) {
    // Suponer que el nivel máximo es 5
    tower.level++;
    tower.damage = tower.type === "solar" ? 10 * tower.level : 15 * tower.level;
    tower.range = 100 + (tower.level - 1) * 20; // Aumentar el rango con cada nivel
    setMoney(money - (tower.type === "solar" ? 100 : 150));
  }
}
