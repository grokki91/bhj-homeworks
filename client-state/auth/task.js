const text = document.querySelector('[name="login"]');
const password = document.querySelector('[name="password"]');
const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
    e.preventDefault();
    let obj = {
        text : text.value,
        password : password.value
    }
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php')
    xhr.send(obj)
    xhr.addEventListener('load', function(e) {
        console.log(this.response);
    })
})