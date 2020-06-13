var mainSlider = new Swiper('.main-slider__body', {
    slidesPerView: 1,
    spaceBetween: 0,
    //slidesPerGroup: 0,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: '.control-main-slider__arrow-next',
        prevEl: '.control-main-slider__arrow-prev',
    },
});

var swiper = new Swiper('.slider-lots__body', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50,
        }},
    navigation: {
        nextEl: '.control-slider-lots__arrow-next',
        prevEl: '.control-slider-lots__arrow-prev',
    },
});

var quotes_slider = new Swiper('.slider-quotes', {
    slidesPerView: 1,
    spaceBetween: 0,
    //slidesPerGroup: 3,
    loop: true,
    effect: 'fade',
    speed: 1000,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1: {
            autoHeight: true,
        },
        320: {
            autoHeight: true,
        },
        650: {
            autoHeight: true,
        }
    },
    on: {
        lazyImageReady: function () {
            ibg();
        },
    },
    navigation: {
        nextEl: '.control-slider-quotes__circle',
    },
});