import { Scene } from 'phaser'

export default class PlayGame extends Scene {
  constructor() {
    super('PlayGame')
  }

  create() {
    console.log('Starting PlayGame Scene')
    this.add.image(100, 100, 'empty_tile')
  }
}
