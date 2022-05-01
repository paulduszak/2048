import Directions from '../enums/Directions'

export default class KeyboardInput {
  constructor(scene, board) {
    this.board = board
    scene.input.keyboard.on('keydown', this.handleKey, this)
  }

  handleKey(event) {
    switch (event.code) {
      case 'ArrowUp':
        this.board.shift(Directions.UP)
        break
      case 'ArrowDown':
        this.board.shift(Directions.DOWN)
        break
      case 'ArrowLeft':
        this.board.shift(Directions.LEFT)
        break
      case 'ArrowRight':
        this.board.shift(Directions.RIGHT)
        break
    }
  }
}
