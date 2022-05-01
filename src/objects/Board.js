import { Tilemaps, Utils } from 'phaser'

import _ from '../Constants'
import Tile from '../sprites/Tile'
import Directions from '../enums/Directions'

export default class Board {
  constructor(scene) {
    this.boardState = []
    for (let row = 0; row < _.boardSize.rows; row++) {
      this.boardState[row] = []
      for (let col = 0; col < _.boardSize.cols; col++) {
        this.boardState[row][col] = new Tile({
          scene,
          row,
          col,
        })
      }
    }
  }

  update() {
    // for (let row = 0; row < _.boardSize.rows; row++) {
    //   for (let col = 0; col < _.boardSize.cols; col++) {
    //     this.boardState[row][col].update()
    //   }
    // }
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

  shift(d) {
    const dRow =
      d === Directions.LEFT || d === Directions.RIGHT
        ? 0
        : d === Directions.UP
        ? -1
        : 1
    const dCol =
      d === Directions.UP || d === Directions.DOWN
        ? 0
        : d === Directions.LEFT
        ? -1
        : 1

    this.canMove = false

    // Moving down 
    // dRow = 1 
    // dCol = 0

    // Moving up 
    // dRow = -1
    // dCol = 0


    for (let row = 0; row < _.boardSize.rows; row++) {
      for (let col = 0; col < _.boardSize.cols; col++) {
        const currRow = dRow === 1 ? (_.boardSize.rows - 1) - row : row
        const currCol = dCol === 1 ? (_.boardSize.cols - 1) - col : col
        const tile = this.boardState[currRow][currCol]

        if (tile.power != 0) {
          tile.update(currRow + dRow, currCol + dCol)
        }
      }
    }

  }
}
