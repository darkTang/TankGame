import ModelAbstract from "./modelAvbstract";
import { image } from '../service/image';
import steel from "../canvas/steel";

export default class Steel extends ModelAbstract {
  canvas: ICanvas = steel
  name: string = 'steel'
  image(): HTMLImageElement {
    return image.get('steel')!
  }
  render(): void {
    super.draw();
  }
}
