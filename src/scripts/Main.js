import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    this.initlaboratoires();
  }

  initlaboratoires() {
    const target = document.querySelector('.swiper');
    if (target) {
      const swiper = new Swiper(target, {
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
