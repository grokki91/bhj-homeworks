const progress = document.getElementById('progress');
const sendBtn = document.getElementById('send');
let file = document.getElementById('file');

sendBtn.addEventListener('click', e => {
    e.preventDefault();
    file = file.files[0];
    toDownload();
})

function toDownload() {
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', function(e) {
        progress.value = e.loaded / e.total;
    })

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(file);
    xhr.addEventListener('readystatechange', function(e) {
        if (xhr.status === 200) {
            xhr.abort();
        }
    })
}