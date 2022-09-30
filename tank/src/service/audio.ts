export default {
  el(id: string) {
    return document.querySelector(id) as HTMLAudioElement;
  },
  start() {
    this.el('#start').play();
  },
  fire() {
    this.el('#fire').play()
  },
  blast() {
    this.el('#blast').play()
  }
};
