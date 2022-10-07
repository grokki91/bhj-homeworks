const timer = document.getElementById('timer');
let time = 5000;
let minutes;
let seconds;
let hours;
getClock();
timer.textContent = `${hours} : ${minutes} : ${seconds}`;

timeoutId = setInterval(reduceTimer, 1000);

function reduceTimer() {
    getClock();
    timer.textContent = `${hours} : ${minutes} : ${seconds}`;
    time--;
    if (time < 0) {
        clearInterval(timeoutId);
        alert('Вы победили в конкурсе!');
        window.location = 'https://developer.mozilla.org/ru/docs/Web/API/Window/location';
    }
}

function getClock() {
    hours = Math.floor(time / 60 / 60);
    minutes = Math.floor(time / 60);
    seconds = time % 60;

    if (minutes > 60) {
        minutes = minutes % 60;
        hours + 1;
    } else if (minutes < 10) {
        minutes = '0' + minutes;
    } else if (minutes < 1) {
        hours - 1;
    }

    if (seconds > 60) {
        minutes + 1;
    } else if (seconds < 10) {
        seconds = '0' + seconds;
    } else if (seconds < 1) {
        minutes - 1;
    }

    hours = hours < 10 ? '0' + hours : hours; 
}
