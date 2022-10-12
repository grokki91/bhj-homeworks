let modal = document.querySelector('.modal');
let btnClose = document.querySelectorAll('.modal__close');
let btnShowSuccess = document.querySelector('.show-success');
let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');

modal.classList.add('modal_active');

btnClose.forEach(el => { 
    el.onclick = function() {
        if (el.closest('.modal_active')) {
            modalMain.classList.contains('modal_active') ? modalMain.style.display = 'none' : modalSuccess.style.display = 'none';
        }
    }
 });


btnShowSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}