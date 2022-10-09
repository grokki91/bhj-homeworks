let count = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let speed = document.getElementById('speed__counter');
let dateStart = 0;
let dateEnd = 0;


cookie.onclick = function() {
    cookie.width = ++count.textContent % 2 ? 250 : 200;
    count.textContent % 2 !== 0 ? dateStart = Date.now() : dateEnd = Date.now();
    if (dateEnd !== 0) {
        speed.textContent = Math.abs((1 / (dateStart - dateEnd)) * 1000).toFixed(2);    
    }
}