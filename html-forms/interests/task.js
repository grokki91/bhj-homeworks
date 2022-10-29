let interest = [...document.querySelectorAll('.interest__check')];

interest.forEach(elem => {
    elem.addEventListener('click', function(e) {
        if (elem.closest('.interest').children.length > 1 && elem.checked === true) {
            elem.closest('.interest').querySelectorAll('.interest__check').forEach(el => el.checked = true);
        } 

        if (elem.closest('.interest').children.length > 1 && elem.checked === false) {
            elem.closest('.interest').querySelectorAll('.interest__check').forEach(el => el.checked = false); 
        }

    })
})
