import ModelAbstract from './modelAvbstract';
import { image } from '../service/image';
import boss from '../canvas/boss';

export default class Boss extends ModelAbstract {
  name: string = 'boss'
  canvas: ICanvas = boss
  image(): HTMLImageElement {
    return image.get('boss')!;
  }
  render(): void {
    super.draw();
  }
}
