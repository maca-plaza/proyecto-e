import Phaser from 'phaser';

export const gameconfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-game', // Contenedor DOM para Phaser
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
};

function preload(setLife, setMoney) {
  return function() {
  // Cargar recursos (torres, enemigos, mapa)
  this.load.pack('assetPack', 'assets/assetPack.json', 'pack');
  this.load.spritesheet('enemy', 'assets/enemy_spritesheet.png', { frameWidth: 64, frameHeight: 64 });
  this.load.image('background', 'assets/sprites/background.png');
}
}
function create(setLife, setMoney) {
  return function() {
  // Crear el mapa, torres, enemigos
  this.add.image(400, 300, 'background'); // Añade el mapa

  // Lógica inicial para la vida y el dinero
  setLife(100);
  setMoney(500);
  
  // Cargar la torre solar con un tamaño personalizado
  this.solarTower = this.add.sprite(20, 100, 'solarTower'); // Ajusta x e y según tu diseño
  this.solarTower.setScale(0.1); // Ajusta la escala según tus necesidades (0.5 es la mitad del tamaño original)
  
  // Crear grupo de torres
  this.towers = this.add.group();
  
  // Añadir torres al grupo
 let solarTowerSprite = this.add.sprite(200, 200, 'solarTower');
    solarTowerSprite.setScale(0.15); // Ajusta la escala según tus necesidades
    this.towers.add(solarTowerSprite);

// Añadir torre de viento al grupo y ajustar la escala
    let windTowerSprite = this.add.sprite(600, 200, 'windTower');
    windTowerSprite.setScale(0.15); // Ajusta la escala según tus necesidades
    this.towers.add(windTowerSprite);
  
  // Cargar el enemigo
  this.enemies = this.add.group();
  
  this.anims.create({
    key: 'move',
    frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  // Añadir enemigos
  for (let i = 0; i < 5; i++) {
    let enemy = this.add.sprite(0, i * 100, 'enemy');
        enemy.setScale(0.15); // Ajusta la escala según tus necesidades
        this.enemies.add(enemy);
    }
  
  // Ruta de enemigos
  this.enemyPath = [
    { x: 100, y: 100 },
    { x: 300, y: 100 },
    { x: 300, y: 300 },
    { x: 500, y: 300 },
    { x: 500, y: 500 },
    { x: 700, y: 500 },
  ];

  // Recursos de sostenibilidad
  this.sustainabilityPoints = 0;
  this.experiencePoints = 0;
  this.sustainabilityText = this.add.text(16, 16, 'Puntos de Sostenibilidad: 0', { fontSize: '32px', fill: '#fff' });

  this.time.addEvent({
    delay: 60000,
    callback: () => {
        this.experiencePoints += 10;
    },
    loop: true
});
}

    
  function update(setLife, setMoney) {
    return function(time, delta) {
      // Obtener arrays de enemigos y torres
      const enemiesArray = this.enemies.getChildren();
      const towersArray = this.towers.getChildren();
  
      // Mover enemigos a lo largo del camino definido
      enemiesArray.forEach((enemy) => {
        moveEnemy(enemy, this.enemyPath);
      });
  
      // Lógica de ataque de las torres a los enemigos
      function update(setLife, setMoney) {
        return function(time, delta) {
          // Obtener arrays de enemigos y torres
          const enemiesArray = this.enemies.getChildren();
          const towersArray = this.towers.getChildren();
      
          // Lógica para cada torre
          towersArray.forEach((tower) => {
            // Atacar enemigos si están en rango
            attackEnemy(tower, enemiesArray, this);
      
            // Mejorar la torre si cumple con la condición
            if (this.experiencePoints >= 100) {
              tower.level += 1;
              this.experiencePoints -= 100;
            }
          });
      
          // Otra lógica de actualización del juego si es necesario
          // Por ejemplo, verificar colisiones, actualizar estado, etc.
        };
      }
  
      // Otra lógica de actualización del juego si es necesario
      this.sustainabilityText.setText('Puntos de Sostenibilidad: ' + this.sustainabilityPoints);
      // Por ejemplo, verificar colisiones, actualizar estado, etc.
    };
  }


function moveEnemy(enemy, path) {
    if (!enemy.pathIndex) enemy.pathIndex = 0;
    const target = path[enemy.pathIndex];
  
    // Movimiento hacia el siguiente punto en la ruta
    if (enemy.x < target.x) enemy.x += 1;
    else if (enemy.x > target.x) enemy.x -= 1;
  
    if (enemy.y < target.y) enemy.y += 1;
    else if (enemy.y > target.y) enemy.y -= 1;
  
    // Si el enemigo ha llegado al punto de destino, pasar al siguiente
    if (Phaser.Math.Distance.Between(enemy.x, enemy.y, target.x, target.y) < 5) {
      enemy.pathIndex++;
      if (enemy.pathIndex >= path.length) enemy.pathIndex = 0;
    }
  }

function attackEnemy(tower, enemiesArray, context) {
          const range = 100; // Rango de ataque de la torre
      const damage = 10 * tower.level; // Daño basado en el nivel de la torre
  
      enemiesArray.forEach((enemy) => {
          if (Phaser.Math.Distance.Between(tower.x, tower.y, enemy.x, enemy.y) < range) {
              // Crear un proyectil
              const projectile = context.add.sprite(tower.x, tower.y, 'projectile');
              context.physics.moveTo(projectile, enemy.x, enemy.y, 300);
  
              // Agregar evento para manejar colisión del proyectil con el enemigo
              context.time.addEvent({
                  delay: 500, // Tiempo estimado para que el proyectil llegue al enemigo
                  callback: () => {
                      // Verificar si el proyectil está cerca del enemigo
                      if (Phaser.Math.Distance.Between(projectile.x, projectile.y, enemy.x, enemy.y) < 10) {
                          enemy.health -= damage; // Reducir la salud del enemigo
                          if (enemy.health <= 0) {
                              enemy.destroy(); // Destruir el enemigo
                              context.sustainabilityPoints += 10; // Ganar puntos de sostenibilidad
                              context.sustainabilityText.setText(`Puntos de Sostenibilidad: ${context.sustainabilityPoints}`);
                          }
                      }
                      projectile.destroy(); // Destruir el proyectil
                  }
              });
          }
      });
  }
}