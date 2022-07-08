import "./index.html";
import "./cart.html";
import "./card.html";
import "./index.scss";

import Swiper, {Thumbs, Navigation} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const thumbSwiper = new Swiper(".card__preview", {
  spaceBetween: 44,
  slidesPerView: 5
}); 

new Swiper(".card__photo", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: thumbSwiper,
  },
  modules: [Thumbs],
});

new Swiper(".recommend__carousel", {
  spaceBetween: 30,
  slidesPerView: 5,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});