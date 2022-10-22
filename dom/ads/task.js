let rotatorLength = document.querySelectorAll('.rotator__case').length;
let rotators = document.querySelectorAll('.rotator');
let count = 0;
let speed = 1000;


setInterval(() => {

    rotators.forEach(rotator => {
        let card = rotator.closest('.card');
        let texts = card.querySelectorAll('.rotator__case');
        texts.forEach((el, index) => {
            if (index === 0) {
                el.classList.remove('rotator__case_active');
            }

            if (index !== count) {
                el.classList.remove('rotator__case_active');
            }

            if (count === index) {
                el.classList.add('rotator__case_active');
                let {color} = el.dataset;
                speed = el.dataset.speed;
                el.style.color = color;
            }
        })
        
    })

    count += 1;
    if (count === rotatorLength) {
        count = 0;
    }

}, speed)