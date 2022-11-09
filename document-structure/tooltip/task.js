let links = [...document.querySelectorAll('.has-tooltip')];
let tooltip = document.querySelector('.tooltip');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let title = link.getAttribute('title');
        tooltip.classList.toggle('tooltip_active');
        tooltip.textContent = title;
        renderPositionTooltip(link);
    })

})

function renderPositionTooltip(link) {
    let { top, left, width, height } = link.getBoundingClientRect();
    let position = link.dataset.position;

    if (position === 'top') {
        tooltip.style.top = top - height - 10 + 'px';
        tooltip.style.left = left + 'px';
    } else if (position === 'left') {
        tooltip.style.left = left - tooltip.clientWidth + 'px';
        tooltip.style.top = top + 'px';
    } else if (position === 'right') {
        tooltip.style.left = left + width + 'px';
        tooltip.style.top = top + 'px';
    } else if (position === 'bottom') {
        tooltip.style.top = top + height + 'px';
        tooltip.style.left = left + 'px';
    }

}