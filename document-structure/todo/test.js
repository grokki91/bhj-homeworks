

document.addEventListener('keypress', e => {
    const { key } = e;
    let input = document.getElementById('task__input');
let taskList = document.getElementById('tasks__list');

    if (key === 'Enter' && input.value !== '') {
        console.log('dfdsf');
        taskList.innerHTML += `
        <div class="task">
            <div class="task__title">${input.value}</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;

        input.value = '';
        [...document.querySelectorAll('.task__remove')].forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.task').remove();
            })
        })
    }
})

