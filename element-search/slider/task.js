let prevBtn = document.querySelector('.slider__arrow_prev');
let nextBtn = document.querySelector('.slider__arrow_next');
let slides = document.querySelector('.slider__items');
let dots = document.querySelectorAll('.slider__dot');
let allSlides = slides.childElementCount - 1; // всего слайдов
let current = 0; // текущий слайд
let dotPosition = 0; // позиция точки

function addSlide() {
    slides.children.item(current).classList.add('slider__item_active');
}

function removeSlide() {
    slides.children.item(current).classList.remove('slider__item_active');
}

prevBtn.onclick = function() {
    if (current < 1) {
        removeSlide();
        current = allSlides;
        addSlide();
    } else {
        removeSlide();
        current--;
        addSlide();
    }
}

nextBtn.onclick = function() {
    if (current >= allSlides) {
        removeSlide();
        current = 0;
        addSlide();
    } else {
        removeSlide();
        current++;
        addSlide();
    }
}

Array.from(dots).forEach((dot, index) => {
    dot.onclick = function() {
        current = index;
        if (!dot.className.includes('slider__dot_active')) {
             dot.classList.add('slider__dot_active');
            current = dotPosition;
            removeSlide();
            current = index;
            addSlide();
        } 
        dotPosition = index;     
    }
});