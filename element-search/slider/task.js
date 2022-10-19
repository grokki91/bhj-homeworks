let prevBtn = document.querySelector('.slider__arrow_prev');
let nextBtn = document.querySelector('.slider__arrow_next');
let slides = document.querySelector('.slider__items');
let dots = [...document.querySelectorAll('.slider__dot')];
let allSlides = slides.childElementCount - 1; // всего слайдов
let current = 0; // текущий слайд
let dotPosition = 0; // позиция точки

function addSlide() {
    slides.children.item(current).classList.add('slider__item_active');
}

function removeSlide() {
    slides.children.item(current).classList.remove('slider__item_active');
}

function changeDot() {
    dots.forEach((el, index) => {
        el.classList.remove('slider__dot_active');
        if (current === index) {
            dotPosition = current;
            el.classList.add('slider__dot_active');
        }

        if ((event.target === el) && (dotPosition !== index)) {
            current = dotPosition;
            removeSlide();
        }

        if (event.target === el) {
            current = index;
            dots[dotPosition].classList.remove('slider__dot_active');
            el.classList.add('slider__dot_active');
            removeSlide();
            addSlide();
            dotPosition = current;
        }
    })
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
    
    changeDot();
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

    changeDot();
}

dots.forEach(dot => {
    dots[dotPosition].classList.add('slider__dot_active');
    dot.onclick = changeDot;
})