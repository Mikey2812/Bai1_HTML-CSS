let indexSlide = 0;
let currentSlide = 0;
let slides = $('.slider-item');
let buttons = $('.slider-indicator button');
let length = slides.length;
$(document).ready(function () {
    setInterval(() => {
        indexSlide = indexSlide + 1;
        if (indexSlide === length) {
            indexSlide = 0;
        }
        slides.eq(currentSlide).removeClass('active');
        buttons.eq(currentSlide).removeClass('active');
        slides.eq(indexSlide).addClass('active');
        buttons.eq(indexSlide).addClass('active');
        currentSlide = indexSlide;
    }, 1000);
});