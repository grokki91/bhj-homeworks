let menuLink = document.querySelectorAll('.menu__link');
let menuItem = document.querySelectorAll('.menu__item');
let menuSub = document.querySelectorAll('.menu_sub');

menuItem.forEach(el => {
    el.onclick = function() {
        for (elem of el.children) {
            if (elem.classList.contains('menu_sub')) {
                elem.classList.toggle('menu_active');
                return false;
            }
        }
    }
})
