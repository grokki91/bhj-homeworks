let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4) {
        let pollObject = JSON.parse(this.response);
        console.log(pollObject);
        title.textContent = `${pollObject.data.title}`;
        for (let value of Object.values(pollObject.data.answers)) {
            answers.innerHTML += `
                <button class="poll__answer">
                ${value}
                </button>`;
        }

        vote('.poll__answer');
    }
})

function vote(classList) {
    [...document.querySelectorAll(classList)].forEach(btn => {
        btn.addEventListener('click', e => {
            alert('Спасибо, ваш голос засчитан!');
        })
    })
}