import config from '../config';
import Canvas from './canvasAbstract';
import model from '../model/steel';

class Steel extends Canvas {
  render(): void {
    super.createModels();
    super.createBossWall();
    super.renderModels();
  }
  num(): number {
    return config.steel.num;
  }
  model(): ModelConstructor {
    return model;
  }
}

export default new Steel('steel');
