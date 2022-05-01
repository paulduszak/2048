import { Geom } from 'phaser'
import Directions from '../enums/Directions'

export default class TouchInput {
  static config = {
    maxSwipeTime: 1000, //max amount of time allowed to swipe
    minSwipeDistance: 20, //min swipe vector magnitude, in pixels
    minSwipeNormal: 0.85, //min length of the longest component of the swipe vector, in pixels
  }
  constructor(scene, board) {
    this.board = board
    scene.input.on('pointerup', this.handleSwipe, this)
  }

  handleSwipe(event) {
    const swipeTime = event.upTime - event.downTime

    if (swipeTime > TouchInput.config.maxSwipeTime) {
      return
    }

    const swipe = new Geom.Point(
      event.upX - event.downX,
      event.upY - event.downY,
    )
    const swipeMagnitude = Geom.Point.GetMagnitude(swipe)

    if (swipeMagnitude < TouchInput.config.minSwipeDistance) {
      return
    }
    Geom.Point.SetMagnitude(swipe, 1)

    if (swipe.x > TouchInput.config.minSwipeNormal) {
      this.board.shift(Directions.RIGHT)
    }
    if (swipe.x < -TouchInput.config.minSwipeNormal) {
      this.board.shift(Directions.LEFT)
    }
    if (swipe.y > TouchInput.config.minSwipeNormal) {
      this.board.shift(Directions.DOWN)
    }
    if (swipe.y < -TouchInput.config.minSwipeNormal) {
      this.board.shift(Directions.UP)
    }
  }
}
