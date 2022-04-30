import { Scene, Utils } from 'phaser'
import _ from './Constants'
import Tile from './sprites/Tile'

export default class PlayGame extends Scene {
  constructor() {
    super('PlayGame')
    this.boardState = []
  }

  create() {
    console.log('Starting PlayGame Scene')

    for (let row = 0; row < _.boardSize.rows; row++) {
      this.boardState[row] = []
      for (let col = 0; col < _.boardSize.cols; col++) {
        this.boardState[row][col] = new Tile({
          scene: this,
          row,
          col,
        })
      }
    }

    this.addTile()
    this.addTile()
  }

  update() {
    for (let row = 0; row < _.boardSize.rows; row++) {
      for (let col = 0; col < _.boardSize.cols; col++) {
        this.boardState[row][col].update()
      }
    }
  }

  addTile() {
    const emptyTiles = []

    for (let row = 0; row < _.boardSize.rows; row++) {
      for (let col = 0; col < _.boardSize.cols; col++) {
        if (this.boardState[row][col].power === 0) {
          emptyTiles.push({ row, col })
        }
      }
    }

    if (emptyTiles.length > 0) {
      const tile = Utils.Array.GetRandom(emptyTiles)

      this.boardState[tile.row][tile.col].increment()
    }
  }
}
