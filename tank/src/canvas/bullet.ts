import Canvas from './canvasAbstract';
import model from '../model/bullet';
import tank from './tank';
import config from '../config';
import player from './player';
import audio from '../service/audio';

class Bullet extends Canvas {
  intervalId = 0;
  num(): number {
    return 0;
  }
  model(): BuildModelConstructor {
    return model;
  }
  stop() {
    clearInterval(this.intervalId);
  }
  render(): void {
    this.intervalId = setInterval(() => {
      this.createBullet();
      this.renderModels();
    }, config.bullet.timeout);
  }
  createBullet() {
    tank.models.forEach((tank) => {
      const isExist = this.models.some((m) => m.tank === tank);
      if (!isExist) {
        this.models.push(new model(tank));
        // audio.fire()
      }
    });
  }
  addPlayBullet() {
    this.models.push(new model(player.models[0]));
    audio.fire()
  }
}

export default new Bullet('bullet');
