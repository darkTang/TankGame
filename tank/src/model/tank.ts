import ModelAbstract from './modelAvbstract';
import { image } from '../service/image';
import { directionEnum } from '../enum/directionEnum';
import config from '../config';
import tank from '../canvas/tank';
import utils from '../utils';
import wall from '../canvas/wall';
import steel from '../canvas/steel';
import water from '../canvas/water';

export default class Tank extends ModelAbstract {
  name: string = 'tank';
  canvas: ICanvas = tank;
  render(): void {
    super.draw();
    this.move();
    // 这段代码表示在不碰撞物体时，也可能会改变方向，并且增加1/15几率向下
    if (Math.floor(Math.random() * 15) === 1) {
      this.direction = directionEnum.Bottom;
    }
  }
  protected move(): void {
    let x = this.x;
    let y = this.y;
    switch (this.direction) {
      case directionEnum.Top:
        y--;
        break;
      case directionEnum.Bottom:
        y++;
        break;
      case directionEnum.Left:
        x--;
        break;
      case directionEnum.Right:
        x++;
        break;
    }
    if (this.isModelTouch(x, y) || utils.isCanvasTouch(x, y)) {
      super.randomDirection();
    } else {
      this.x = x;
      this.y = y;
    }
  }
  image() {
    let position = 'tank' + this.direction;
    return image.get(position as keyof typeof config.images)!;
  }
  isModelTouch(
    x: number,
    y: number,
    width: number = config.model.width,
    height: number = config.model.height,
    models = [...wall.models, ...steel.models, ...water.models]
  ): boolean {
    return models.some((model) => {
      const state =
        x + width <= model.x ||
        x >= model.x + model.width ||
        y + height <= model.y ||
        y >= model.y + model.height;
      return !state;
    });
  }
}
