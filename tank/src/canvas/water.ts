import config from '../config';
import Canvas from './canvasAbstract';
import model from '../model/water';

class Water extends Canvas {
  num(): number {
    return config.water.num;
  }
  model(): ModelConstructor {
    return model;
  }

  render(): void {
    super.createModels();
    super.renderModels();
  }
}

export default new Water('water');
