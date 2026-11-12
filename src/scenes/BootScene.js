import Phaser from 'phaser';

// Loads assets (none yet in phase 1), then hands off to the next scene.
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Phase 2: this.load.image(...) calls go here.
  }

  create() {
    this.scene.start('GameScene');
  }
}
