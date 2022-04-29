import { Game } from 'phaser'

import PlayGame from './PlayGame'
import BootGame from './BootGame'
import _ from './Constants'

const config = {
  width: _.boardSize.cols * (_.tileSize + _.tileSpacing) + _.tileSpacing,
  height: _.boardSize.rows * (_.tileSize + _.tileSpacing) + _.tileSpacing,
  backgroundColor: 0xecf0f1,
  scene: [BootGame, PlayGame],
}

let game

window.onload = () => {
  game = new Game(config)
  window.focus()
  resizeGame()
  window.addEventListener('resize', resizeGame)
}

const resizeGame = () => {
  const canvas = document.querySelector('canvas')
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window
  const windowRatio = windowWidth / windowHeight
  const gameRatio = game.config.width / game.config.height

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + 'px'
    canvas.style.height = windowWidth / gameRatio + 'px'
  } else {
    canvas.style.width = windowHeight * gameRatio + 'px'
    canvas.style.height = windowHeight + 'px'
  }
}
