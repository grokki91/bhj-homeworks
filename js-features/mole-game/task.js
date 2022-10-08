let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let counterDead = 0;
let counterLost = 0;


let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = function() {
        if (counterDead > 9) {
            result();
            alert('Победа!');
        }

        if (counterLost > 4) {
            result();
            alert('Вы проиграли!');          
        }

        if (hole.className.includes('hole_has-mole')) {
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }
    }
}

function result() {
    counterDead = 0;
    counterLost = 0;
    dead.textContent = counterDead;
    lost.textContent = counterLost;
}