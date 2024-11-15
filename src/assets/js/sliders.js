$(document).ready(function() {
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

    });
    sliderClone();
    const gallerySlider = new Swiper('.gallery .gallery__slider.swiper', {
        centeredSlides: true,
        slidesPerView: 1.4,
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            1200: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 14,
                centeredSlides: false
            }
        }
    });
});

function sliderClone() {
    const allSlides = document.querySelectorAll(`.gallery .swiper-slide`);
    const slidesCount = allSlides.length;
    let iterationCount = 0;

    if (slidesCount >= 9 || !slidesCount) {
        return;
    }

    iterationCount = Math.floor(9 / slidesCount);
    for (let i = 0; i < iterationCount - 1; i++) {
        allSlides.forEach(slide => {
            const slidesParent = slide.parentElement;
            let clonedSlide = slide.cloneNode(true);
            slidesParent.appendChild(clonedSlide);
        });
    }
}