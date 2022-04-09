import PlayGame from './PlayGame'
import BootGame from './BootGame'

const config = {
  width: 480,
  height: 640,
  backgroundColor: 0xff0000,
  scene: [BootGame, PlayGame],
}

let game

window.onload = () => {
  game = new Phaser.Game(config)
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
