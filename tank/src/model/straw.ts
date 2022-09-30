import ModelAbstract from './modelAvbstract';
import { image } from '../service/image';
import straw from '../canvas/straw';

export default class Straw extends ModelAbstract {
  name: string = 'straw'
  canvas: ICanvas = straw;
  image(): HTMLImageElement {
    return image.get('straw')!;
  }
  render(): void {
    super.draw();
  }
}
