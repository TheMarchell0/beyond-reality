const activitiesSlider = new Swiper ('.features__slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    initialSlide: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.features__slider .swiper-button-next',
        prevEl: '.features__slider .swiper-button-prev',
    },
    pagination: {
        el: '.features__slider .swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})