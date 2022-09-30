import boss from './canvas/boss';
import steel from './canvas/steel';
import wall from './canvas/wall';
import config from './config';

export default {
  // 检测碰撞
  isModelTouch(
    x: number,
    y: number,
    width: number = config.model.width,
    height: number = config.model.height,
    models = [...wall.models, ...steel.models, ...boss.models]
  ): IModel | undefined {
    return models.find((model) => {
      const state =
        x + width <= model.x ||
        x >= model.x + model.width ||
        y + height <= model.y ||
        y >= model.y + model.height;
      return !state;
    });
  },
  isCanvasTouch(
    x: number,
    y: number,
    width: number = config.model.width,
    height: number = config.model.height
  ): boolean {
    if (
      x < 0 ||
      x + width > config.canvas.width ||
      y < 0 ||
      y + height > config.canvas.height
    ) {
      return true;
    }
    return false;
  },
};
