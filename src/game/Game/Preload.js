const preload = (setLife, setMoney) => function() {
    this.load.pack('assetPack', 'assets/assetPack.json', 'pack');
    this.load.spritesheet('enemy', 'assets/enemy_spritesheet.png', { frameWidth: 64, frameHeight: 64 });
    this.load.image('background', 'assets/sprites/background.png');
    this.load.image('solarTower', 'assets/sprites/solarTower.png');
    this.load.image('windTower', 'assets/sprites/windTower.png');
    this.load.image('projectile', 'assets/sprites/projectile.png');
  };
  
  export default preload;