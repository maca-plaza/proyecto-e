const towerLocations = [
  { x: 267, y: 335 },
  { x: 400, y: 255 },
  { x: 537, y: 285 },
  { x: 565, y: 385 },
]; // Añadir ubicaciones predefinidas para las torres

const create = (setLife, setMoney) => function() {
  this.add.image(400, 300, "background");

  setLife(100);
  setMoney(500);
  this.projectiles = this.add.group(); // Grupo para proyectiles
  

  this.towers = this.add.group(); // Grupo para almacenar las torres

  // Crea sprites de ubicaciones de torres (invisibles, solo para detectar clics)
  towerLocations.forEach((location) => {
    const locationSprite = this.add.rectangle(location.x, location.y, 40, 40, 0xffffd5, 0.45);
    locationSprite.setInteractive();
    locationSprite.on("pointerdown", () => {
      // Verificar si ya se colocó una torre en esta ubicación
      if (!isTowerPlaced(this, location.x, location.y)) {
        // Lógica para colocar una torre en la ubicación clicada
        placeTower(this, location.x, location.y, "solar", 1); // Ejemplo: Coloca una torre solar de nivel 1
      }
    });
  });

  this.enemies = this.add.group();

  this.anims.create({
    key: "move",
    frames: this.anims.generateFrameNumbers("enemy", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  });

  for (let i = 0; i < 5; i++) {
    let enemy = this.add.sprite(0, i * 100, "enemy");
    enemy.setScale(0.15);
    enemy.health = 100; // Inicializar salud del enemig
    this.physics.add.existing(enemy); // Añadir cuerpo físico al enemigo
    enemy.body.setCollideWorldBounds(true);
    this.enemies.add(enemy);
  }

  this.enemyPath = [
    { x: 50, y: 400 },
    { x: 100, y: 400 },
    { x: 200, y: 400 },
    { x: 300, y: 400 },
    { x: 340, y: 300 },
    { x: 340, y: 200 },
    { x: 450, y: 200 },
    { x: 470, y: 300 },
    { x: 500, y: 320 },
    { x: 600, y: 340 },
    { x: 700, y: 400 },
    { x: 750, y: 500 },
    { x: 650, y: 500 },
    { x: 550, y: 500 },
  ];

  this.sustainabilityPoints = 0;
  this.experiencePoints = 0;
  this.sustainabilityText = this.add.text(16, 16, "Puntos de Sostenibilidad: 0", {
    fontSize: "32px",
    fill: "#fff",
  });

  this.time.addEvent({
    delay: 60000,
    callback: () => {
      // Verificar si se ha colocado al menos una torre antes de comenzar el ataque
      if (this.towers.getLength() > 0) {
        this.experiencePoints += 10;
        // Lógica de ataque de los enemigos aquí
      }
    },
    loop: true,
  });
};

// Función para verificar si ya se colocó una torre en la ubicación específica
function isTowerPlaced(scene, x, y) {
  return scene.towers.getChildren().some((tower) => tower.x === x && tower.y === y);
}

// Función para colocar una torre en la posición específica
function placeTower(scene, x, y, type, level) {
  // Verificar si ya hay una torre en esta ubicación
  const existingTower = scene.towers.getChildren().find((tower) => tower.x === x && tower.y === y);
  if (existingTower) return;

  // Crear la torre en la ubicación seleccionada
  let towerSprite = scene.add.sprite(x, y, `${type}Tower`);
  towerSprite.setScale(0.05);
  towerSprite.type = type;
  towerSprite.level = level;
  scene.towers.add(towerSprite);
}

export default create;