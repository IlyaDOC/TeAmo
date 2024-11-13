$(document).ready(function() {


    /*const exampleSlider = new Swiper(".example .swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        observer: true,
        observeParents: true,

        pagination: {
            el: '.example .swiper-pagination',
            clickable: true
        },

        navigation: {
            nextEl: '.example .slider-arrow--next',
            prevEl: '.example .slider-arrow--prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1560: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });*/


    const participantsThumbsSlider = new Swiper('.participants .thumbs-slider.swiper', {
        slidesPerView: 1.5,
        spaceBetween: 10,
        breakpoints: {
            1200: {
                slidesPerView: 'auto',
                spaceBetween: 14,
            }
        }
    });

    const participantsMainSlider = new Swiper('.participants .main-slider.swiper', {
        slidesPerView: 1,
        thumbs: {
            swiper: participantsThumbsSlider
        },

    })
});