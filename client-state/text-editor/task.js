const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear');
let words = '';
let savedText = localStorage.getItem('words');

if (savedText) {
    editor.textContent = savedText;
    words = savedText;
}

editor.addEventListener('keypress', e => {
    let { key } = e;
    words += key;

    localStorage.setItem('words', words);
})

clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
})