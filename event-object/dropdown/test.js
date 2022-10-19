let value = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let currentValue = value.textContent;

value.addEventListener('click', function(event) {
    list.classList.toggle('dropdown__list_active');
    console.log(this);
})

list.addEventListener('click', function(event) {
    event.preventDefault();
    let newValue = event.target.textContent;
    if (currentValue !== newValue) {
        value.textContent = newValue;
    }
})