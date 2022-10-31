class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    // Отрисовываю элементы сразу
    let word = document.querySelector('.word').textContent;
    let loss = document.querySelector('.status__loss').textContent;
    let win = document.querySelector('.status__wins').textContent;
    let time = word.length;
    document.querySelector('.timer').textContent = time;

    // Функция рендера элементов
    function renderElements() {
      word = document.querySelector('.word').textContent;
      document.querySelector('.timer').textContent = time;
    }

    let timeId = setInterval(() => {
      let currentWord = word; // Сохраняю слово, чтобы потом его сравнить с новым
      time--;
      renderElements();

      if (loss > 3 || win > 9) {
        clearInterval(timeId);
      }  

      if (time === 0) {
        this.fail();
        time = word.length;
        renderElements();
      }

      if (currentWord !== word) {
        time = word.length;
        renderElements();
      }
    }, 1000)

    document.addEventListener('keypress', e => {
      let symbol = this.currentSymbol.textContent;
      let { key } = e;

      if (key.toLowerCase().charCodeAt(0) === symbol.charCodeAt(0)) {
          return this.success();
      } else {
        this.fail();
      }
    })
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'привет',
        'рок',
        'я люблю kitkat',
        'интересные stories'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))