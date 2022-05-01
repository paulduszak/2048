import { Scene } from 'phaser'
import Board from './objects/Board'

import KeyboardInput from './inputs/Keyboard'
import TouchInput from './inputs/Touch'

export default class PlayGame extends Scene {
  constructor() {
    super('PlayGame')
  }

  create() {
    console.log('Starting PlayGame Scene')

    this.board = new Board(this)

    this.board.addTile()
    //this.board.addTile()

    new KeyboardInput(this, this.board)
    new TouchInput(this, this.board)
  }

  update() {
    //this.board.update()
  }
}
