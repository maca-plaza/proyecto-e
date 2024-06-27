import { levelUpTower } from "./Helpers";

const towerLocations = [
  { x: 267, y: 335 },
  { x: 400, y: 255 },
  { x: 537, y: 285 },
  { x: 565, y: 385 },
]; // Añadir ubicaciones predefinidas para las torres

let towerCount = 0;
let selectedTowerType = null; // Tipo de torre seleccionada por defecto

const create = (setLife, setMoney, setTowers) =>
  function () {
    this.add.image(400, 300, "background");

    setLife(100);
    setMoney(500);
    this.projectiles = this.add.group(); // Grupo para proyectiles

    this.towers = this.add.group(); // Grupo para almacenar las torres

    // Crea sprites de ubicaciones de torres (invisibles, solo para detectar clics)
    towerLocations.forEach((location) => {
      const locationSprite = this.add.rectangle(
        location.x,
        location.y,
        40,
        40,
        0xffffd5,
        0.45
      );
      locationSprite.setInteractive();
      locationSprite.on("pointerdown", () => {
        // Verificar si ya se colocó una torre en esta ubicación
        if (!isTowerPlaced.call(this, location.x, location.y)) {
          // Lógica para colocar una torre en la ubicación clicada
          const type =
            selectedTowerType || (towerCount % 2 === 0 ? "solar" : "wind");
          placeTower(this, location.x, location.y, type, 1, setTowers); // Ejemplo: Coloca una torre solar de nivel 1
          towerCount++;
        }
      });
    });
    // Añadir botones para seleccionar el tipo de torre
    const solarButton = this.add.text(700, 50, "Solar", {
      fontSize: "32px",
      fill: "#fff",
    });
    solarButton.setInteractive();
    solarButton.on("pointerdown", () => {
      selectedTowerType = "solar";
    });

    const windButton = this.add.text(700, 100, "Wind", {
      fontSize: "32px",
      fill: "#fff",
    });
    windButton.setInteractive();
    windButton.on("pointerdown", () => {
      selectedTowerType = "wind";
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
      { x: 700, y: 400, damage: true },
      { x: 750, y: 500 },
      { x: 650, y: 500 },
      { x: 550, y: 500 },
    ];

    this.sustainabilityPoints = 0;
    this.experiencePoints = 0;
    this.sustainabilityText = this.add.text(
      16,
      16,
      "Puntos de Sostenibilidad: 0",
      {
        fontSize: "32px",
        fill: "#fff",
      }
    );

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
function isTowerPlaced(x, y) {
  return (
    this.towers &&
    this.towers.getChildren().some((tower) => tower.x === x && tower.y === y)
  );
}

// Función para colocar una torre en la posición específica
function placeTower(scene, x, y, type, level, setTowers) {
  // Verificar si ya hay una torre en esta ubicación
  const existingTower = scene.towers
    .getChildren()
    .find((tower) => tower.x === x && tower.y === y);
  if (existingTower) return;

  // Crear la torre en la ubicación seleccionada
  let towerSprite = scene.add.sprite(x, y, `${type}Tower`);
  let scale = type === "solar" ? 0.05 : 0.2; // Ajusta la escala según el tipo de torre
  towerSprite.setScale(scale);
  towerSprite.type = type;
  towerSprite.level = level;
  towerSprite.range = type === "solar" ? 100 : 150; // Ajuste del rango según el tipo de torre
  towerSprite.damage = type === "solar" ? 10 * level : 15 * level;
  scene.towers.add(towerSprite);

  setTowers({
    id: `${x}-${y}`,
    level: level,
    type: type,
    x: x,
    y: y,
    tower: towerSprite,
  });
}

/* function levelUpTower(tower) {
  tower.level += 1;
  tower.damage = tower.type === "solar" ? 10 * tower.level : 15 * tower.level;
  tower.range = 100 + (tower.level - 1) * 20; // Aumentar el rango con cada nivel
} */

export default create;
