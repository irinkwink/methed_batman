const sliderThumbs = new Swiper(
    '.slider-thumbs', 
    {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3,
        centeredSlides: true,
        loopedSlides: 4
    },
    );
    
window.addEventListener('resize', () => {
    if (window.innerWidth <= 580) {
        sliderThumbs.options.set('spaceBetween', 5);
    } else {
        sliderThumbs.options.set('spaceBetween', 20);
    }
})

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
})


const sliderMain = new Swiper('.slider-main', {
    loop: true,
    thumbs: {
        swiper: sliderThumbs
    },
    loopedSlides: 4
});

// sliderThumbs.controller.control = sliderMain;
// sliderMain.controller.control = sliderThumbs;
