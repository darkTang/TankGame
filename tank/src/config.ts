import straw from './static/images/straw/straw.png';
import wall from './static/images/wall/wall.gif';
import water from './static/images/water/water.gif';
import steel from './static/images/wall/steels.gif';
import tankBottom from './static/images/tank/bottom.gif';
import tankTop from './static/images/tank/top.gif';
import tankLeft from './static/images/tank/left.gif';
import tankRight from './static/images/tank/right.gif';
import bullet from './static/images/bullet/bullet.jpg';
import boss from './static/images/boss/boss.png';
import playerTop from './static/images/player/top.gif'
import playerRight from './static/images/player/right.gif'
import playerBottom from './static/images/player/bottom.gif'
import playerLeft from './static/images/player/left.gif'

export default {
  canvas: {
    width: 900,
    height: 600,
  },
  model: {
    width: 30,
    height: 30,
  },
  straw: {
    num: 100,
  },
  wall: {
    num: 50,
  },
  water: {
    num: 20,
  },
  steel: {
    num: 20,
  },
  tank: {
    num: 10,
    // 坦克移动速度
    timeout: 20,
  },
  bullet: {
    // 子弹移动速度
    timeout: 10
  },
  images: {
    straw,
    wall,
    water,
    steel,
    tankBottom,
    tankTop,
    tankLeft,
    tankRight,
    bullet,
    boss,
    playerTop,
    playerRight,
    playerBottom,
    playerLeft
  },
};
