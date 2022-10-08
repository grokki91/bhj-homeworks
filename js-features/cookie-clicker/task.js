let count = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');
let speed = document.getElementById('speed__counter');
let dateStart = 0;
let dateEnd = 0;


cookie.onclick = function() {
    count.textContent++;
    if (count.textContent % 2 !== 0) {
        cookie.width = 220;
        dateStart = Date.now();
        console.log(dateStart);
    } else {
        cookie.width = 200;
        dateEnd = Date.now();
        console.log(dateEnd);
    }
    if (dateEnd !== 0) {
        speed.textContent = Math.abs((1 / (dateStart - dateEnd)) * 1000).toFixed(2);    
    }
}