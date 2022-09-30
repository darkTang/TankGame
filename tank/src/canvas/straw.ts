import config from '../config';
import Canvas from './canvasAbstract';
import model from '../model/straw';

class Straw extends Canvas {
  num(): number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    super.createModels()
    super.renderModels()
  }
}

export default new Straw('straw');
