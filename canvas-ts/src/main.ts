const canvas = document.querySelector('#canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;

// ctx.fillStyle = 'red';
// ctx.fillRect(0, 0, 300, 300);
// ctx.fillStyle = '#3498db';
// ctx.fillRect(0, 0, 100, 100);

// ctx.strokeStyle = '#27ae60';
// ctx.lineWidth = 30;
// ctx.lineCap = 'round'
// ctx.lineJoin = 'round';   // 设置倒角，注意：设置的尺寸不能超过画布，否则没有效果
// ctx.strokeRect(0, 0, 300, 300);

// ctx.strokeStyle = '#27ae60';
// ctx.arc(100, 100, 50, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.beginPath()
// ctx.moveTo(canvas.width / 2, 10);
// ctx.lineTo(canvas.width, 250);
// ctx.lineTo(250, 10);
// ctx.closePath()

// ctx.strokeStyle = 'red'
// ctx.stroke()

// 渐变色
// createLinearGradient(起始点x0, 起始点y0, 结束点x1, 结束点y1)
// const gradient = ctx.createLinearGradient(0, 0, 0, 300);  // 水平方向渐变
// const gradient = ctx.createLinearGradient(0, 0, 300, 0);  // 垂直方向渐变
// const gradient = ctx.createLinearGradient(0, 0, 300, 300); // 左上角到右下角渐变
// gradient.addColorStop(0, '#1abc9c');
// gradient.addColorStop(0.5, '#f1c40f');
// gradient.addColorStop(1, '#9b59b6');

// // ctx.fillStyle = gradient;
// // ctx.fillRect(0, 0, 300, 300);
// ctx.strokeStyle = gradient;
// ctx.lineWidth = 30
// ctx.lineJoin = 'round'
// ctx.strokeRect(50, 50, 100, 100);

// ctx.fillStyle = '#34495e';
// ctx.fillRect(0, 0, 300, 300);

// ctx.font = '50px MarkerFelt-Thin';
// // ctx.fillStyle = '#2ecc71'
// // ctx.fillText('I LOVE YOU', 20, 50);

// ctx.strokeStyle = gradient
// ctx.textBaseline = 'top'  // 调整文字基线
// ctx.strokeText('I LOVE YOU', 20, 0)


// 贴图功能：无法调整图片的位置和大小，适用于满铺
// const img = document.createElement('img');
// // const img = new Image(100, 100)
// img.src = './src/images/xtx.png';
// img.onload = () => {
//   // document.body.appendChild(img)
//   const pattern = ctx.createPattern(img, 'repeat')!;
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 500, 500);
// };


// 画图功能
// ctx.fillRect(0, 0, 500, 500);
// const img = document.createElement('img');
// // const img = new Image(100, 100)
// img.src = './src/images/xtx.png';
// img.onload = () => {
//   // drawImage(img, x, y, dx, dy)
//   // 实现图片跟随画布等比例放大缩小
//   // naturalWidth 图片原始宽度
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.naturalWidth * scale(img, canvas),
//     img.naturalHeight * scale(img, canvas)
//   );
// };

// function scale(img: HTMLImageElement, canvas: HTMLCanvasElement) {
//   return Math.min(
//     canvas.width / img.naturalWidth,
//     canvas.height / img.naturalHeight
//   );
// }


// 满天星案例
ctx.fillRect(0, 0, 400, 400);
// for (let i = 0; i < 1000; i++) {
//   ctx.fillStyle = 'white';
//   ctx.fillRect(
//     Math.random() * canvas.width,
//     Math.random() * canvas.height,
//     2,
//     2
//   );
// }

// 满天圆案例
for (let i = 0; i <20; i++) {
  ctx.beginPath()
  ctx.fillStyle = [
    '#1abc9c',
    '#3498db',
    '#8e44ad',
    '#e67e22',
    '#95a5a6',
    '#f8a5c2',
  ][Math.floor(Math.random() * 6)];
  ctx.arc(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    Math.random() * 50,
    0,
    2 * Math.PI
  );
  ctx.fill()
}
