let loader = document.getElementById('loader');
let items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();

xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4 ) {
        loader.classList.remove('loader_active');
        valuteList = JSON.parse(this.response).response.Valute;
    
        for (key of Object.entries(valuteList)) {
            items.innerHTML += `
                <div class="item">
                    <div class="item__code">
                        ${key[1].CharCode}
                    </div>
                    <div class="item__value">
                        ${key[1].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`;
        }
    } 
})