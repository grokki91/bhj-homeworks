const reveals = [...document.querySelectorAll('.reveal')];

document.addEventListener('scroll', e => {
    let viewportHeight = window.innerHeight;

    reveals.forEach(el => {
        let elementPosition = el.getBoundingClientRect().top;

        if (elementPosition < viewportHeight / 2) {
            el.classList.add('reveal_active');
        }
    })
})