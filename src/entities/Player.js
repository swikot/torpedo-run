import Phaser from 'phaser';
import { PLAYER, TEXTURES } from '../config.js';

// The player's boat. Movement is done through its Arcade Physics body:
// we set acceleration / angular velocity and the physics engine integrates
// them using delta time every step, so speed is frame-rate independent.
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, TEXTURES.BOAT);
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setupBody();
    this.keys = scene.input.keyboard.addKeys('W,A,S,D');
  }

  setupBody() {
    // Arcade bodies never rotate, so a circle fits the boat at any angle.
    const radius = PLAYER.HEIGHT / 2;
    this.body.setCircle(radius, PLAYER.WIDTH / 2 - radius, 0);

    this.body.setMaxSpeed(PLAYER.MAX_SPEED);
    this.body.setDamping(true);           // drag = "keep this fraction per second"
    this.body.setDrag(PLAYER.DAMPING);    // only applies while not thrusting
    this.body.setCollideWorldBounds(true);
    this.body.setBounce(PLAYER.BOUNCE);
  }

  // Called by GameScene every frame.
  update() {
    this.handleRotation();
    this.handleThrust();
  }

  handleRotation() {
    let turn = 0;
    if (this.keys.A.isDown) turn -= 1;
    if (this.keys.D.isDown) turn += 1;
    this.body.setAngularVelocity(turn * PLAYER.TURN_SPEED);
  }

  handleThrust() {
    let thrust = 0;
    if (this.keys.W.isDown) thrust += PLAYER.THRUST;
    if (this.keys.S.isDown) thrust -= PLAYER.REVERSE_THRUST;

    // Push in the direction the nose points. Zero thrust = coast with drag.
    this.scene.physics.velocityFromRotation(this.rotation, thrust, this.body.acceleration);
  }
}

