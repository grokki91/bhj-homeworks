const reveals = [...document.querySelectorAll('.reveal')];

document.addEventListener('scroll', e => {
    let viewportHeight = window.innerHeight;

    reveals.forEach(el => {
        let {top} = el.getBoundingClientRect();

        if (top < viewportHeight / 2) {
            el.classList.add('reveal_active');
        }
    })
})