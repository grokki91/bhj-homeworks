let links = [...document.querySelectorAll('.has-tooltip')];
let tooltips = document.querySelectorAll('.tooltip');
let tooltip = document.querySelector('.tooltip');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let { top, left } = link.getBoundingClientRect();
        let title = link.getAttribute('title');
        tooltips.forEach(el => el.classList.remove('tooltip_active'))
        tooltip.classList.toggle('tooltip_active');
        tooltip.textContent = title;
        tooltip.style.top = top + 20 + 'px';
        tooltip.style.left = left + 'px';
        tooltip.dataset.top = 'над текстом';
        tooltip.dataset.left = 'слева от текста';
        tooltip.dataset.right = 'справа от текста';
        tooltip.dataset.bottom = 'снизу от текста';
    })

})

