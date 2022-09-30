import ModelAbstract from "./modelAvbstract";
import { image } from '../service/image';
import wall from "../canvas/wall";

export default class Wall extends ModelAbstract {
  name: string = 'wall'
  canvas: ICanvas = wall
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  render(): void {
    super.draw();
  }
}
