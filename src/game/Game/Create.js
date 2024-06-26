const create = (setLife, setMoney) => function() {
    this.add.image(400, 300, 'background');
  
    setLife(100);
    setMoney(500);
  
    this.solarTower = this.add.sprite(20, 100, 'solarTower');
    this.solarTower.setScale(0.1);
  
    this.towers = this.add.group();
    
    let solarTowerSprite = this.add.sprite(200, 200, 'solarTower');
    solarTowerSprite.setScale(0.15);
    this.towers.add(solarTowerSprite);
  
    let windTowerSprite = this.add.sprite(600, 200, 'windTower');
    windTowerSprite.setScale(0.15);
    this.towers.add(windTowerSprite);
  
    this.enemies = this.add.group();
  
    this.anims.create({
      key: 'move',
      frames: this.anims.generateFrameNumbers('enemy', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });
  
    for (let i = 0; i < 5; i++) {
      let enemy = this.add.sprite(0, i * 100, 'enemy');
      enemy.setScale(0.15);
      this.enemies.add(enemy);
    }
  
    this.enemyPath = [
      { x: 100, y: 100 },
      { x: 300, y: 100 },
      { x: 300, y: 300 },
      { x: 500, y: 300 },
      { x: 500, y: 500 },
      { x: 700, y: 500 },
    ];
  
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
  };
  
  export default create;
  