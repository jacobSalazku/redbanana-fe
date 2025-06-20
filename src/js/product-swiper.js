import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Scrollbar } from 'swiper/modules';

Swiper.use([Navigation, Scrollbar]);

const ProductSlider = (selector) => {
  new Swiper(selector, {
    direction: 'horizontal',
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: `${selector} .swiper-button-next`,
      prevEl: `${selector} .swiper-button-prev`,
    },
    scrollbar: {
      el: `${selector} .swiper-scrollbar`,
      draggable: false,
      hide: false,
      dragSize: 'auto',
      dragClass: 'swiper-scrollbar-drag',
    },
  });
};

export { ProductSlider };
