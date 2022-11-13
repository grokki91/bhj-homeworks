let title = document.getElementById('poll__title');
let answers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4) {
        let pollObject = JSON.parse(this.response);
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
            // let xhrPost = new XMLHttpRequest;
            // xhrPost.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            // xhrPost.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            // xhrPost.send(xhrPost);
            // xhrPost.addEventListener('load', function(e) {
            //     let loaded = JSON.parse(e.target.response);
            //     console.log(loaded);
            // })
        })
    })
}