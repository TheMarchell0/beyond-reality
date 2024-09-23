import {CarouselModule} from '../modules/carousel.js';

export function slidersInitialization() {
    const activitiesSlider = new Swiper('.js-features-slider', {
        modules: [CarouselModule],
        slidesPerView: 'auto',
        initialSlide: 1,
        spaceBetween: 185,
        centeredSlides: true,
        effect: "carousel",
        carouselEffect: {
            opacityStep: 0.4,
            scaleStep: .52,
            sideSlides: 1,
        },
        navigation: {
            nextEl: '.js-features-slider-arrows-next',
            prevEl: '.js-features-slider-arrows-prev',
        },
        pagination: {
            el: '.js-features-slider-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}