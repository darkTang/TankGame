import './style.less';
import config from './config';
import Straw from './canvas/straw';
import Wall from './canvas/wall';
import Water from './canvas/water';
import Steel from './canvas/steel';
import Tank from './canvas/tank';
import Bullet from './canvas/bullet';
import Boss from './canvas/boss';
import Player from './canvas/player';

import './service/image';
import { promises } from './service/image';
import audio from './service/audio';


const app = document.querySelector('#app') as HTMLDivElement;
app.style.width = config.canvas.width + 'px';
app.style.height = config.canvas.height + 'px';

export default {
  isStart: false,
  state: 9,
  interval: 0,
  bootstrap() {
    app.addEventListener('click', async () => {
      await this.start()
      this.interval = setInterval(() => {
        if (Tank.models.length == 0) this.state = 1
        if (Player.models.length == 0 || Boss.models.length == 0) this.state = 0
        if (this.state != 9) this.stop()
      }, 100)
    })
  },
  stop() {
    clearInterval(this.interval)
    Tank.stop()
    Bullet.stop()
    this.text()
  },
  text() {
    const el = document.createElement('canvas')
    el.setAttribute('style', 'z-index: 100')
    el.width = config.canvas.width
    el.height = config.canvas.height
    const ctx = el.getContext('2d')!
    ctx.fillStyle = 'red'
    ctx.font = '80px CascadiaMono'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'center'
    ctx.fillText(this.state == 1 ? 'VICTORY' : 'GAME OVER', config.canvas.width / 2, config.canvas.height / 2)
    app.appendChild(el)
  },
  async start() {
    if (this.isStart === true) return
    audio.start()
    this.isStart = true
    app.style.backgroundImage = 'none'
    await Promise.all(promises)

    Straw.render()
    Wall.render()
    Water.render()
    Steel.render()
    Tank.render()
    Bullet.render()
    Boss.render()
    Player.render()
  },
}