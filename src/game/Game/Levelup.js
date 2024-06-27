import React from 'react';

// Función para subir de nivel una torre
function levelUpTower(tower) {
  tower.level += 1;
  tower.damage = tower.type === 'solar' ? 10 * tower.level : 15 * tower.level;
  tower.range = 100 + (tower.level - 1) * 20; // Aumentar el rango con cada nivel
}

// Ejemplo de cómo podrías implementar un botón para subir de nivel una torre
const levelUpButton = this.add.text(700, 16, 'Subir Nivel', { fontSize: '32px', fill: '#fff' });
levelUpButton.setInteractive();
levelUpButton.on('pointerdown', () => {
  const tower = this.towers.getChildren()[0]; // Ajusta esto para seleccionar la torre deseada
  if (this.experiencePoints >= 100) {
    levelUpTower(tower);
    this.experiencePoints -= 100;
  }
});