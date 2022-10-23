const textFontBtn = [...document.querySelector('.book__control').children];
const content = document.querySelector('.book__content');
const textColorBtn = [...document.querySelector('.book__control_color').querySelectorAll('.color')];
const bgColorBtn = [...document.querySelector('.book__control_background').querySelectorAll('.color')];
let fontClass;
let textColorClass;
let bgColorClass;

textFontBtn.forEach(el => el.addEventListener('click', (e) => changeFont(el, e)));
textColorBtn.forEach(el => el.addEventListener('click', (e) => changeTextColor(el, e)));
bgColorBtn.forEach(el => el.addEventListener('click', (e) => changeBgColor(el, e)));


function changeFont(el, e) {
    e.preventDefault();
        textFontBtn.forEach(elem => elem.classList.remove('font-size_active'));
        content.classList.remove(fontClass)

        if (e.target === el) {
            el.classList.add('font-size_active');
            fontClass = el.dataset.size === undefined ? 'font-size_' + 'normal' : 'font-size_' + el.dataset.size;
            content.classList.add(fontClass);
        }
}

function changeTextColor(el, e) {
    e.preventDefault();
    textColorBtn.forEach(elem => elem.classList.remove('color_active'));
        content.classList.remove(textColorClass)

        if (e.target === el) {
            el.classList.add('color_active');
            textColorClass = 'book_color-' + el.dataset.textColor;
            content.classList.add(textColorClass);
        }
}

function changeBgColor(el, e) {
    e.preventDefault();
    bgColorBtn.forEach(elem => elem.classList.remove('color_active'));
        content.classList.remove(bgColorClass)

        if (e.target === el) {
            el.classList.add('color_active');
            bgColorClass = 'book_bg-' + el.dataset.bgColor;
            content.classList.add(bgColorClass);
        }
}