// Бургер меню
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
})

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
})

// Фоновая музыка
try {
    const mute = document.querySelector('.mute__checkbox');
    const audio = new Audio('audio/waterTower.mp3');
    const checkMute = () => {
        if (mute.checked) {
            audio.play().catch(() => {
                mute.checked = false;
            });
        } else {
            audio.pause();
        }
    }
    if (mute) {
        setTimeout(checkMute(), 2000);   
    }
    

    mute.addEventListener('change', checkMute);
} catch {}



try {
    const pagination = document.querySelector('.pagination');
    const paginationVideo = document.querySelector('.pagination_video');
    const paginationButton = document.querySelector('.pagination__arrow');
    const videos = document.querySelectorAll('video');

    const sliderThumbs = new Swiper(
        '.slider-thumbs', 
        {
            loop: true,
            loopedSlides: 4,
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 5,
  // Responsive breakpoints
            breakpoints: {
                580: {
                    spaceBetween: 20
                }
            }
        }
        );

    sliderThumbs.on('click', (swiper) => {
        swiper.slideTo(swiper.clickedIndex);
        if (paginationVideo) {
            paginationVideo.classList.toggle('pagination_active');
            console.log(videos[swiper.realIndex]);
            videos[swiper.realIndex].play();
        }
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

    sliderMain.on('slideChange', () => {
        for (let i = 0; i < videos.length; i++) {
            videos[i].pause();
        }
    });

//  Скрытие переключения слайдов
    paginationButton.addEventListener('click', () => {
        pagination.classList.toggle('pagination_active');
    });
        

}   catch {}
