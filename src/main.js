import Phaser from 'phaser';
import { GAME, COLORS } from './config.js';
import BootScene from './scenes/BootScene.js';
import GameScene from './scenes/GameScene.js';

const config = {
  type: Phaser.AUTO, // WebGL if available, otherwise Canvas
  parent: 'game',
  width: GAME.WIDTH,
  height: GAME.HEIGHT,
  backgroundColor: COLORS.OCEAN,
  scale: {
    mode: Phaser.Scale.FIT, // keep 960x540 aspect ratio, fit to window
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: { debug: false },
  },
  // First scene in the list starts automatically.
  scene: [BootScene, GameScene],
};

new Phaser.Game(config);
