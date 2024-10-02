import {CarouselModule} from '../modules/carousel.js';

export function slidersInitialization() {

    if (innerWidth <= 1024) {
        const activitiesSliderMobile = new Swiper('.js-features-slider', {
            slidesPerView: 'auto',
            initialSlide: 1,
            spaceBetween: 15,
            centeredSlides: true,
            allowTouchMove: false,
            speed: 700,
            navigation: {
                nextEl: '.js-features-slider-arrows-next',
                prevEl: '.js-features-slider-arrows-prev',
            },
            pagination: {
                el: '.js-features-slider-pagination',
                type: 'bullets',
                clickable: true,
            }
        })

        const newsSlider = new Swiper('.js-news-slider', {
            slidesPerView: 1,
            spaceBetween: 14,
            speed: 700,
            navigation: {
                nextEl: '.js-news-slider-arrows-next',
                prevEl: '.js-news-slider-arrows-prev',
            },
            pagination: {
                el: '.js-news-slider-pagination',
                type: 'bullets',
                clickable: true,
            },
        })
        createStagger(newsSlider);
    }

    else {
        const activitiesSlider = new Swiper('.js-features-slider', {
            modules: [CarouselModule],
            slidesPerView: 'auto',
            initialSlide: 1,
            spaceBetween: 185,
            centeredSlides: true,
            allowTouchMove: false,
            effect: "carousel",
            speed: 700,
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

        createStagger(activitiesSlider);
    }

}

function createStagger(slider) {
    const sliderElements = [slider.navigation.nextEl, slider.navigation.prevEl, slider.pagination.el]

    slider.on('slideChangeTransitionStart', () => {
        for (let sliderElement of sliderElements) {
            sliderElement.setAttribute('disabled', true);
        }
    });

    slider.on('slideChangeTransitionEnd', () => {
        for (let sliderElement of sliderElements) {
            sliderElement.setAttribute('disabled', false);
        }
    });
}
