let incBtn = document.querySelectorAll('.product__quantity-control_inc');
let decBtn = document.querySelectorAll('.product__quantity-control_dec');
let buyBtn = document.querySelectorAll('.product__add');
let cart = document.querySelector('.cart__products');
let title = document.querySelector('.cart__title');

incBtn.forEach(el => {
    el.addEventListener('click', e => {
        let value = el.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        value.textContent++;
    })
})

decBtn.forEach(el => {
    el.addEventListener('click', e => {
        let value = el.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        value.textContent > 1 ? value.textContent-- : 1;
    })
})

buyBtn.forEach(el => {
    el.addEventListener('click', e => {
        let id = el.closest('.product').dataset.id;
        let src = el.closest('.product').querySelector('img').getAttribute('src');
        let value = el.closest('.product').querySelector('.product__quantity-value');
        
        title.textContent = `Корзина`;
        
        // добавлять товары без дублирования и суммировать их количество
        let cartId = [...document.querySelectorAll('.cart__product')].find(el => el.dataset.id === id);
        if (cartId && cartId.dataset.id === id) {
            let cartValue = cartId.querySelector('.cart__product-count');
            cartValue.textContent = parseInt(cartValue.textContent) + parseInt(value.textContent);
        } else {
            cart.innerHTML += `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${src}">
                <div class="cart__product-close">X</div>
                <div class="cart__product-count">${value.textContent}</div>
            </div>`;
        }

        // задание с анимацией
        animationImg(el, id);

        [...document.querySelectorAll('.cart__product > .cart__product-close')].forEach(close => {
            close.addEventListener('click', e => {
                e.target.closest('.cart__product').remove();
                if (document.querySelector('.cart__products').children.length === 0) {
                    title.textContent = ``;
                }
            })
        })
    })
})


function animationImg(el, id) {
    let step = 50;
    let cloneImg = el.closest('.product').querySelector('img').cloneNode();
    cloneImg.style.position = 'absolute';
    let imgProductX = el.closest('.product').querySelector('img').getBoundingClientRect().top;
    let imgProductY = el.closest('.product').querySelector('img').getBoundingClientRect().left;
    let imgCartX;
    let imgCartY;
    [...document.querySelectorAll('.cart__product')].forEach(elem => {
        if (elem.dataset.id === id) {
            imgCartX = elem.querySelector('img').getBoundingClientRect().top;
            imgCartY = elem.querySelector('img').getBoundingClientRect().left;
        }
    });

    let differX = imgProductX - imgCartX;
    let differY = imgCartY - imgProductY;

    let timerId = setInterval(() => {
        cloneImg.style.top = imgProductX - differX / step + 'px';
        cloneImg.style.left = imgProductY + differY / step + 'px';
        document.body.insertAdjacentElement('afterbegin', cloneImg)

        if (parseInt(cloneImg.style.top) <= imgCartX) {
            cloneImg.remove();
            clearInterval(timerId);
        }

        step--;
    }, 10)

}