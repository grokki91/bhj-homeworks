const widget = document.querySelector('.chat-widget');
const chat = document.querySelector('.chat-widget__messages');
const text = document.querySelector('.chat-widget__input');
const botText = ['Привет!', 'Это бот', 'Вы уверены в своем выборе?', 'Просьба повторить свой вопрос', 'Было приятно с вами пообщаться', 'Со мной весело)', 'Вот и поговорили'];
let timer = 30;

widget.addEventListener('click' , () => {
    widget.classList.add('chat-widget_active');
})

function randomAnswer() {
    let rand = Math.floor(Math.random() * botText.length);
    return botText[rand];
}

document.addEventListener('keyup', e => {
    let time = new Date().toLocaleTimeString().slice(0, -3);
    const { code } = e;

    if (code === 'Enter' && text.value !== '') {
        clearInterval(timerId);
        chat.innerHTML += `
        Сообщение от клиента
        <div class="message message_client">
            <div class='message__time'>${time}</div>
            <div class='message__text'>${text.value}</div>
        </div>`;

        chat.innerHTML += `
        Сообщение от робота
        <div class="message">
            <div class='message__time'>${time}</div>
            <div class='message__text'>${randomAnswer()}</div>
        </div>`;

        chat.lastChild.scrollIntoView();
    }
})

let timerId = setInterval(() => {
    let time = new Date().toLocaleTimeString().slice(0, -3);

    if (widget.classList.contains('chat-widget_active')) {
        timer--;

        chat.innerHTML += `
        Сообщение от робота
        <div class="message">
            <div class='message__time'>${time}</div>
            <div class='message__text'>${randomAnswer()}</div>
        </div>`;

        chat.lastChild.scrollIntoView();
    }

}, timer * 1000);