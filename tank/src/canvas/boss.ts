import Canvas from './canvasAbstract';
import model from '../model/boss';
import config from '../config';

class Boss extends Canvas {
  num(): number {
    return 0
  }
  model(): ModelConstructor {
    return model;
  }

  render(): void {
    this.createModels()
    this.renderModels()
  }
  protected createModels() {
    ;[{ x: config.canvas.width / 2, y: config.canvas.height - config.model.height }].forEach(position => {
      const model = this.model() as ModelConstructor
      const instance = new model(position.x, position.y)
      this.models.push(instance)
    })
  }
}

export default new Boss('boss');
