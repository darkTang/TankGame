import config from '../config';
import position from '../service/position';

export default abstract class Canvas {
  public models: IModel[] = [];
  public tankModel: IModel[] = [];
  abstract render(): void;
  abstract num(): number;
  abstract model(): ModelConstructor | BuildModelConstructor;
  constructor(
    protected name: string,
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    public ctx = el.getContext('2d')!
  ) {
    this.createCanvas();
  }
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;
    this.el.setAttribute('name', this.name);
    this.app.appendChild(this.el);
  }

  //生成模型实例
  protected createModels() {
    position.getPositionCollection(this.num()).forEach((position) => {
      const model = this.model() as ModelConstructor;
      const instance = new model(position.x, position.y);
      this.models.push(instance);
    });
  }

  public renderModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);
    this.models.forEach((model) => model.render());
  }
  public removeModel(model: IModel) {
    this.models = this.models.filter((m) => m !== model);
  }
  createBossWall() {
    const cw = config.canvas.width;
    const ch = config.canvas.height;
    const mw = config.model.width;
    const mh = config.model.height;
    const pos = [
      { x: cw / 2 - mw * 2, y: ch - mh },
      { x: cw / 2 - mw * 2, y: ch - mh * 2 },
      { x: cw / 2 - mw * 2, y: ch - mh * 3 },
      { x: cw / 2 - mw, y: ch - mh * 3 },
      { x: cw / 2, y: ch - mh * 3 },
      { x: cw / 2 + mw, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 3 },
      { x: cw / 2 + mw * 2, y: ch - mh * 2 },
      { x: cw / 2 + mw * 2, y: ch - mh },
    ];
    pos.forEach((position) => {
      const model = this.model() as ModelConstructor;
      const instance = new model(position.x, position.y);
      this.models.push(instance);
    });
  }
}
