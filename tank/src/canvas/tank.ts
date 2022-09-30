import config from '../config';
import Canvas from './canvasAbstract';
import model from '../model/tank';
import position from '../service/position';

class Tank extends Canvas {
  intervalId = 0;
  num(): number {
    return config.tank.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    // this.renderModels();
    this.createModels();
    this.intervalId = setInterval(
      () => this.renderModels(),
      config.tank.timeout
    );
  }
  stop() {
    clearInterval(this.intervalId);
  }
  public renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    super.renderModels();
  }

  protected createModels() {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position();
      const model = this.model();
      const instance = new model(pos.x, 0);
      this.models.push(instance);
    }
  }
}

export default new Tank('tank');
