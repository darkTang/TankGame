import Canvas from './canvasAbstract';
import model from '../model/player';
import config from '../config';

class Player extends Canvas {
  num(): number {
    return 0;
  }
  model(): ModelConstructor {
    return model;
  }

  render(): void {
    this.createModels();
    super.renderModels();
  }

  protected createModels() {
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const mw = config.model.width;
    const mh = config.model.height;
    [{ x: cw / 2 + mw * 4, y: ch - mh }].forEach((position) => {
      const model = this.model() as ModelConstructor;
      const instance = new model(position.x, position.y);
      this.models.push(instance);
    });
  }
}

export default new Player('player');
