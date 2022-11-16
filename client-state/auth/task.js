const btn = document.querySelector('.btn');
const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const login = document.querySelector('[name="login"]');
const password = document.querySelector('[name="password"]');

const loginStorage = localStorage.getItem('form');
loginStorage ? greet(loginStorage) : false;

btn.addEventListener('click', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.addEventListener('load', function(e) {
        const response = e.target.response;

        if (!response.success) {
            form.reset();
            return alert('Неверный логин/пароль');
        }

        localStorage.setItem('form', response.user_id);
        greet(response.user_id);
    })
})

function greet(id) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.textContent += id;
}