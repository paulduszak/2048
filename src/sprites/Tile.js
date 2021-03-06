import { GameObjects } from 'phaser'
import _ from '../Constants'

export default class Tile extends GameObjects.Sprite {
  static spriteName = 'tiles'
  static powers = [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
  power = 0

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
      new GameObjects.Text(scene, x, y, '', Tile.textStyle),
    )
    this.text.x = Math.floor(this.x - this.text.width / 2)
    this.text.y = Math.floor(this.y - this.text.height / 2)
  }

  update(col, row) {
    // bump the power by 1 (for now)
    // update x, y of sprite and text
    console.log('col:', col, 'row:', row)
    console.log('current x pos:', this.x)
    console.log('current y pos', this.y)
    this.x = _.tileSpacing * (col + 1) + _.tileSize * (col + 0.5)
    this.y = _.tileSpacing * (row + 1) + _.tileSize * (row + 0.5)
    console.log('new x pos:', this.x)
    console.log('new y pos', this.y)

    this.text.x = Math.floor(this.x - this.text.width / 2)
    this.text.y = Math.floor(this.y - this.text.height / 2)
    this.increment()
  }

  increment() {
    if (this.power < Tile.powers.length) {
      this.power = this.power + 1
      this.text.setText(Tile.powers[this.power])
      //this.setFrame(this.power)
      // tween here?
    }
  }
}
