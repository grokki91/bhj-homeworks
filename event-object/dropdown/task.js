let values = [...document.querySelectorAll('.dropdown__value')];
let lists = [...document.querySelectorAll('.dropdown__list')];

values.forEach((value, index) => {
    value.addEventListener('click', function(event) {
        let valueIndex = index;
        lists.filter((el, index) => {
            if (valueIndex === index) {
                el.classList.toggle('dropdown__list_active');
            }
        })
    })
})

lists.forEach(list => {
    list.addEventListener('click', function(event) {
        event.preventDefault();
        currentEvent = event.target.closest('.dropdown').children;
        [...currentEvent].forEach(el => {
            if (el.className === 'dropdown__value') {
                el.textContent = event.target.textContent;
            }
        })
    })
<<<<<<< HEAD
})

// Вопрос: можно ли этот код как-то оптимизировать? 
// Пришлось использовать цикл в цикле, что наверное не очень хорошо скажется на производительности
=======
})
>>>>>>> 3342f5e03d242821071f56bca591454e500c51b9
