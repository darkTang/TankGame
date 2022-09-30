import './style.css';

enum colorType {
  bgColor,
  lineColor,
}
class Blackboard {
  constructor(
    private el = document.querySelector('canvas')!,
    private bgColor = '#000',
    private lineColor = '#fff',
    private ctx = el.getContext('2d')!,
    private width: number = el.width,
    private height: number = el.height,
    private btns: HTMLDivElement = document.createElement('div')
  ) {
    this.initCanvas();
    this.bindEvent();
  }
  private initCanvas() {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.el.insertAdjacentElement('afterend', this.btns);
    this.btns.className = 'btns';
  }
  private bindEvent() {
    const callback = this.drawLine.bind(this);
    this.el.addEventListener('mousedown', (e: MouseEvent) => {
      this.ctx.beginPath();
      // this.ctx.lineWidth = 1
      this.ctx.strokeStyle = this.lineColor;
      this.ctx.moveTo(e.offsetX, e.offsetY);
      this.el.addEventListener('mousemove', callback);
      document.addEventListener('mouseup', () => {
        this.el.removeEventListener('mousemove', callback);
      });
    });
  }
  private drawLine(e: MouseEvent) {
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.stroke();
  }

  // 设置背景颜色
  public setBgColor(color: string, text: string, type: colorType) {
    const el = document.createElement('button');
    el.innerHTML = text;
    this.btns.appendChild(el);
    el.addEventListener('click', () => {
      this.bgColor = color;
      this.ctx.fillStyle = color;
      this.ctx.fillRect(0, 0, this.width, this.height);
    });
  }
  // 设置画笔颜色
  public setLineColor() {
    const colors = ['#fff', '#EAB543', '#55E6C1', '#B33771', '#FEA47F'];
    const container = document.createElement('div');
    container.className = 'color-container';
    colors.forEach((color) => {
      const div = document.createElement('div');
      div.style.cssText = `width: 20px; height: 20px; background-color: ${color}; margin-left: 5px;`;
      container.appendChild(div);
      div.addEventListener('click', () => {
        this.ctx.lineWidth = 1;
        this.lineColor = color;
      });
    });
    this.btns.appendChild(container);
    const divs = document.querySelectorAll('.color-container div');
    for (let i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', () => {
        for (let j = 0; j < divs.length; j++) {
          divs[j].classList.remove('selected');
        }
        divs[i].classList.add('selected');
      });
    }
  }
  // 清屏
  public clear() {
    const el = document.createElement('button');
    el.innerHTML = '清屏';
    el.className = 'clear';
    this.btns.insertAdjacentElement('afterbegin', el);
    el.addEventListener('click', () => {
      // this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = this.bgColor;
      this.ctx.fillRect(0, 0, this.width, this.height);
    });
  }
  // 橡皮擦
  public erase() {
    const divs = document.querySelectorAll('.color-container div');
    const el = document.createElement('button');
    el.innerHTML = '橡皮擦';
    document.querySelector('.clear')!.insertAdjacentElement('afterend', el);
    el.addEventListener('click', () => {
      for (let j = 0; j < divs.length; j++) {
        divs[j].classList.remove('selected');
      }
      this.lineColor = this.bgColor;
      this.ctx.lineWidth = 10;
    });
  }

  // 截图
  public shot() {
    const el = document.createElement('button');
    el.innerHTML = '截图';
    this.btns.insertAdjacentElement('afterbegin', el);
    const img = document.createElement('img')
    el.addEventListener('click', () => {
      img.src = this.el.toDataURL('images/jpeg')
      img.className = 'img-shot'
    });
    this.btns.insertAdjacentElement('afterend', img)
  }
}

const instance = new Blackboard();
instance.setLineColor();
instance.clear();
instance.erase();
instance.shot()
