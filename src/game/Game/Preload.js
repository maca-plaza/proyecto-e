const preload = (setLife, setMoney) => function() {
    this.load.pack('assetPack', 'assets/assetPack.json', 'pack');
    this.load.spritesheet('enemy', 'assets/enemy_spritesheet.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('background', 'assets/map.png');
    this.load.image('solarTower', 'assets/solar_tower.png');
    this.load.image('windTower', 'assets/wind_tower.png');
    this.load.image('projectile', 'assets/projectile.png');
  };
  
  export default preload;