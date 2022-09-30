import ModelAbstract from './modelAvbstract';
import { image } from '../service/image';
import bullet from '../canvas/bullet';
import config from '../config';
import { directionEnum } from '../enum/directionEnum';
import utils from '../utils';
import wall from '../canvas/wall';
import steel from '../canvas/steel';
import boss from '../canvas/boss';
import tank from '../canvas/tank';
import player from '../canvas/player';

export default class Bullet extends ModelAbstract {
  name: string = 'bullet';
  canvas: ICanvas = bullet;

  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);
    this.direction = tank.direction as unknown as directionEnum;
  }
  image(): HTMLImageElement {
    return image.get('bullet')!;
  }
  render(): void {
    let x = this.x;
    let y = this.y;  
    let step = this.tank.name == 'play' ? 10 : 1;
    switch (this.direction) {
      case directionEnum.Top:
        y -= step;
        break;
      case directionEnum.Right:
        x += step;
        break;
      case directionEnum.Bottom:
        y += step;
        break;
      case directionEnum.Left:
        x -= step;
        break;
    }
    // 碰撞检测
    const touchModel = utils.isModelTouch(x, y, 3, 3, [
      ...wall.models,
      ...steel.models,
      ...boss.models,
      ...tank.models,
      ...player.models,
    ]);
    if (utils.isCanvasTouch(x, y, 2, 2)) {
      this.destroy();
    } else if (touchModel && touchModel.name != this.tank.name) {
      this.destroy();
      if (touchModel.name != 'steel') touchModel.destroy();
      this.blast(touchModel);
    } else {
      this.x = x;
      this.y = y;
      this.draw();
    }
  }
  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 3, 3);
  }
}
