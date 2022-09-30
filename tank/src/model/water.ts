import ModelAbstract from './modelAvbstract';
import { image } from '../service/image';
import water from '../canvas/water';

export default class Water extends ModelAbstract {
  name: string = 'water'
  canvas: ICanvas = water
  image(): HTMLImageElement {
    return image.get('water')!;
  }
  render(): void {
    super.draw();
  }
}
