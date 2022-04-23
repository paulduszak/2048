import { Scene, Tilemaps } from 'phaser'
import _ from './Constants'

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
        this.boardState[row][col] = new Tile(0, getTilePosition(row, col))
        this.add.image(tilePosition.x, tilePosition.y, 'empty_tile')
      }
    }
  }

  getTilePosition(row, col) {
    const x = _.tileSpacing * (col + 1) + _.tileSize * (col + 0.5)
    const y = _.tileSpacing * (row + 1) + _.tileSize * (row + 0.5)

    return new Phaser.Geom.Point(x, y)
  }
}
