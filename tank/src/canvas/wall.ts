import config from '../config';
import Canvas from './canvasAbstract';
import model from '../model/wall';

class Wall extends Canvas {
  num(): number {
    return config.wall.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    super.createModels();
    super.renderModels();
  }

}

export default new Wall('wall');
