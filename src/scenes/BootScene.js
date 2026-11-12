import Phaser from 'phaser';
import { COLORS, TEXTURES, PLAYER } from '../config.js';

// Loads assets, then hands off to the next scene.
// Phase 1 has no image files, so we draw shapes and turn them into textures.
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // Phase 2: this.load.image(TEXTURES.BOAT, 'assets/boat.png') etc.
  }

  create() {
    this.makeBoatTexture();
    this.scene.start('GameScene');
  }

  // A triangle pointing right (Phaser's angle 0 = facing right).
  makeBoatTexture() {
    const { WIDTH: w, HEIGHT: h } = PLAYER;
    const g = this.make.graphics({ add: false });
    g.fillStyle(COLORS.BOAT);
    g.fillTriangle(0, 0, w, h / 2, 0, h);
    g.generateTexture(TEXTURES.BOAT, w, h);
    g.destroy();
  }
}
