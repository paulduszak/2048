import { Scene } from 'phaser'
import _ from './Constants'

export default class BootGame extends Scene {
  constructor() {
    super('BootGame')
  }

  preload() {
    this.load.spritesheet('tiles', 'assets/sprites/tiles.png', {
      frameWidth: _.tileSize,
      frameHeight: _.tileSize
    })
  }

  create() {
    console.log('Starting BootGame Scene')
    this.scene.start('PlayGame')
  }
}
