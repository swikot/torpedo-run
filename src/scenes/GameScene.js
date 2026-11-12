import Phaser from 'phaser';
import { GAME, COLORS, OCEAN } from '../config.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.drawOcean();
  }

  // Draws a static pattern of small wave dashes so motion will be visible later.
  drawOcean() {
    const g = this.add.graphics();
    g.lineStyle(2, COLORS.WAVE, OCEAN.WAVE_ALPHA);

    for (let y = OCEAN.WAVE_SPACING / 2; y < GAME.HEIGHT; y += OCEAN.WAVE_SPACING) {
      // Offset every other row so the pattern looks less like a grid.
      const rowOffset = (y / OCEAN.WAVE_SPACING) % 2 < 1 ? 0 : OCEAN.WAVE_SPACING / 2;
      for (let x = rowOffset; x < GAME.WIDTH; x += OCEAN.WAVE_SPACING) {
        g.lineBetween(x, y, x + OCEAN.WAVE_LENGTH, y);
      }
    }
  }

  // Called every frame. `delta` = milliseconds since the last frame.
  update(time, delta) {}
}
