const menuItem = document.querySelectorAll('.menu__item');

menuItem.forEach(el => {
    el.onclick = function(event) {
        if (el.childNodes.length > 3) {
            event.preventDefault();
        }

        el.closest('.menu').querySelectorAll('.menu_sub').forEach(elem => {
            elem.classList.remove('menu_active');
        })

        if (event.target.closest('li').querySelector('.menu_sub') !== null) {
            event.target.closest('li').querySelector('.menu_sub').classList.add('menu_active');
        }
    }
})