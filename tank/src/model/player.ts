import ModelAbstract from './modelAvbstract';
import { image } from '../service/image';
import player from '../canvas/player';
import config from '../config';
import { directionEnum } from '../enum/directionEnum';
import utils from '../utils';
import wall from '../canvas/wall';
import steel from '../canvas/steel';
import water from '../canvas/water';
import bullet from '../canvas/bullet';

export default class Player extends ModelAbstract {
  name: string = 'player';
  canvas: ICanvas = player;
  bindEvent: boolean = false;

  image() {
    let direction = 'player' + this.direction;
    return image.get(direction as keyof typeof config.images)!;
  }
  render(): void {
    super.draw();
    if (!this.bindEvent) {
      this.bindEvent = true;
      document.addEventListener('keydown', this.changeDirection.bind(this));
      document.addEventListener('keydown', this.move.bind(this));
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.code === 'Space') bullet.addPlayBullet();
      });
    }
  }
  changeDirection(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowUp':
        this.direction = directionEnum.Top;
        break;
      case 'ArrowDown':
        this.direction = directionEnum.Bottom;
        break;
      case 'ArrowLeft':
        this.direction = directionEnum.Left;
        break;
      case 'ArrowRight':
        this.direction = directionEnum.Right;
        break;
    }
  }
  move(e: KeyboardEvent) {
    let x = this.x;
    let y = this.y;
    console.log(y);

    switch (e.code) {
      case 'ArrowUp':
        y -= 5;
        break;
      case 'ArrowDown':
        y += 5;
        break;
      case 'ArrowLeft':
        x -= 5;
        break;
      case 'ArrowRight':
        x += 5;
        break;
    }
    if (utils.isCanvasTouch(x, y) || this.isModelTouch(x, y)) {
      return;
    }
    this.x = x;
    this.y = y;

    this.canvas.renderModels();
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
