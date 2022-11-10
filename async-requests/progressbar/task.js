const progress = document.getElementById('progress');
const sendBtn = document.getElementById('send');
let file = document.getElementById('file');
const step = 1 / 500;

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    file = file.files[0];
    toDownload();
})

function toDownload() {
    const xhr = new XMLHttpRequest;
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(file)
    let timerId = setInterval(() => {
        progress.value += step;
    }, 10)

    xhr.addEventListener('progress', function(e) {
        if (this.status === 200) {
            clearInterval(timerId);
            progress.value = 1;
            this.abort();
        }
    })
}