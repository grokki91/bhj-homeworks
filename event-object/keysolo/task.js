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
    let word = document.querySelector('.word').textContent;
    let loss = document.querySelector('.status__loss').textContent;
    let win = document.querySelector('.status__wins').textContent;
    let timer = document.querySelector('.timer').textContent;

    let time = word.length;
    timer = time;
    let timeId = setInterval(() => {
      timer = document.querySelector('.timer').textContent = time;
      timer = time;
      time--;

      if (time < 1) {
        this.fail();
        word = document.querySelector('.word').textContent;
        timer = document.querySelector('.timer').textContent = time;
        time = word.length;
      }

      if (loss > 3 || win > 9) {
        clearInterval(timeId);
      }
    }, 1000)

    
    document.addEventListener('keyup', e => {
      let symbol = this.currentSymbol.textContent;
      let {key} = e;
      if (key.toLowerCase() === symbol) {
        return this.success();
      } 
      
      this.fail();
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
        'javascript'
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

