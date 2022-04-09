import { Scene } from 'phaser'

export default class BootGame extends Scene {
  constructor() {
    super('BootGame')
  }

  preload() {
    this.load.image('empty_tile', 'assets/sprites/empty_tile.png')
  }

  create() {
    console.log('Starting BootGame Scene')
    this.scene.start('PlayGame')
  }
}
