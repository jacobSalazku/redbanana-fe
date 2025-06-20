import '../sass/main.scss';
import { handleMenuToggle } from './open-menu.js';
import { ProductSlider } from './product-swiper.js';
import { sectionAnimations } from './section-anitmation.js';

sectionAnimations();
handleMenuToggle();
ProductSlider('.product__slider');
ProductSlider('.reviews__slider');
ProductSlider('.blog__slider');
