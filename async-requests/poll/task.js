const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const votes = document.getElementById('poll__votes');
const xhr = new XMLHttpRequest();
let postStatus = false;

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('progress', function() {
    if (xhr.status === 200 && !postStatus) {
        const pollObject = JSON.parse(xhr.response);
        title.textContent = `${pollObject.data.title}`;
        for (value of Object.values(pollObject.data.answers)) {
            answers.innerHTML += `
                <button class="poll__answer">
                ${value}
                </button>`;
        }
        vote('.poll__answer', pollObject);
    }
})

function vote(classList, pollObject) {
    [...document.querySelectorAll(classList)].forEach(btn => {
        btn.addEventListener('click', e => {
            const answer = pollObject.data.answers.findIndex(el => el === btn.innerText);
            alert('Спасибо, ваш голос засчитан!');
            
            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhr.responseType = 'json';
            xhr.send(`vote=${pollObject.id}&answer=${answer}`);
            postStatus = true;

            xhr.addEventListener('load', function(e) {
                if (xhr.status === 200) {
                    const state = xhr.response;
                    document.querySelector('.poll__answers_active').remove();

                    for (value in state) {
                        let stateArr = state[value];
                        stateArr.map(el => {
                            votes.innerHTML += `
                                <div class="poll_vote">
                                    <span class="poll_answer">
                                    ${el.answer} :
                                    </span>
                                    <span class="poll_votes">
                                    ${el.votes} %
                                    </span>     
                                </div>`;
                        })
                    }
                }
            })
            
        })
    })
}