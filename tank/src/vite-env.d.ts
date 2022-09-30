/// <reference types="vite/client" />

interface ModelConstructor {
  // 接口中的new关键字
  new (x: number, y: number): IModel;
}

interface BuildModelConstructor {
  // 接口中的new关键字
  new (tank: IModel): IModel;
}

interface IModel {
  render(): void;
  tank?: IModel;
  name?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  direction: string;
  destroy(): void;
  image(): HTMLImageElement;
}

interface ICanvas {
  ctx: CanvasRenderingContext2D;
  removeModel(model: IModel): void;
  renderModels(): void;
}
