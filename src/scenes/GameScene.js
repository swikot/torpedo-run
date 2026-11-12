import Phaser from 'phaser';
import { GAME, COLORS, OCEAN, PLAYER } from '../config.js';
import Player from '../entities/Player.js';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.drawOcean();
    this.setWorldBounds();
    this.player = new Player(this, GAME.WIDTH / 2, GAME.HEIGHT / 2);
  }

  // The boat's hit circle is smaller than the boat, so pull the edges in by
  // the difference; otherwise the nose pokes off-screen at the border.
  setWorldBounds() {
    const pad = (PLAYER.WIDTH - PLAYER.HEIGHT) / 2;
    this.physics.world.setBounds(pad, pad, GAME.WIDTH - pad * 2, GAME.HEIGHT - pad * 2);
  }

  // Draws a static pattern of small wave dashes so motion is easy to see.
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
  update(time, delta) {
    this.player.update(time, delta);
  }
}
