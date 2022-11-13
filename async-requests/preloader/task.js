let loader = document.getElementById('loader');
let items = document.getElementById('items');

if (localStorage.getItem('valute')) {
    loader.classList.remove('loader_active');
    items.innerHTML = JSON.parse(localStorage.getItem('valute')).map(item => `
    <div class="item">
        <div class="item__code">
            ${item.code}
        </div>
        <div class="item__value">
        ${item.value}
        </div>
        <div class="item__currency">
        ${item.currency}
        </div>
    </div>
`).join('');
} 

else {
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
            let item = [...document.querySelectorAll('.item')];
            let itemArray = item.map(el => ({
                code : el.querySelector('.item__code').innerText,
                value : el.querySelector('.item__value').innerText,
                currency : el.querySelector('.item__currency').innerText
            }))
            
            localStorage.setItem('valute', JSON.stringify(itemArray));
        } 
    })
}