import { GameObjects } from 'phaser'
import _ from '../Constants'

export default class Tile extends GameObjects.Sprite {
  static spriteName = 'tiles'
  
  static textStyle = {
    font: '32px Arial',
    fill: '#000000',
    wordWrap: true,
    wordWrapWidth: this.width,
    align: 'center',
  }

  constructor(config) {
    const { scene, row, col } = config
    const x = _.tileSpacing * (col + 1) + _.tileSize * (col + 0.5)
    const y = _.tileSpacing * (row + 1) + _.tileSize * (row + 0.5)

    super(scene, x, y, Tile.spriteName, 0)
    scene.add.existing(this)
    this.scene = scene
    this.text = scene.add.existing(
      new GameObjects.Text(scene, x, y, _.tileSize, Tile.textStyle),
    )
  }

  update() {
    // TODO: Onlty update this if the values actually changed
    //console.log(this.x, this.width, this.text.width)
    this.text.x = Math.floor(this.x - this.text.width / 2)
    this.text.y = Math.floor(this.y - this.text.height / 2)
  }
}
