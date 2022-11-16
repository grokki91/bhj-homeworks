const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

document.cookie === 'modal=close' ? modal.classList.remove('modal_active') : modal.classList.add('modal_active');

closeBtn.addEventListener('click', e => {
   if (e.target.closest('.modal')) {
    e.target.closest('.modal').classList.remove('modal_active');
    document.cookie = 'modal=close';
   } 
})