import { Scene } from 'phaser'
import Board from './objects/Board'

export default class PlayGame extends Scene {
  constructor() {
    super('PlayGame')
  }

  create() {
    console.log('Starting PlayGame Scene')

    this.board = new Board(this)

    this.board.addTile()
    this.board.addTile()
  }

  update() {
    this.board.update()
  }
}
