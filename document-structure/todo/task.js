let input = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');
let arrList = [];

input.addEventListener('keypress', event => {
    const { key } = event;

    if (key === 'Enter' && input.value !== '') {
        taskList.innerHTML += `
        <div class="task">
            <div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
        let index = document.querySelectorAll('.task').length - 1;
        arrList.push(document.querySelectorAll('.task')[index]);

        localStorage.setItem('task', arrList);

        input.value = '';
        [...document.querySelectorAll('.task__remove')].forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.task').remove();
            })
        })
    }
})