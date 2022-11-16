const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear');
const savedText = localStorage.getItem('words');
editor.textContent = savedText;

editor.addEventListener('keyup', () => localStorage.setItem('words', editor.value));

clearBtn.addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
})