let tabsBlock = [...document.querySelectorAll('.tabs')];

tabsBlock.forEach(el => {
    let tabs = [...el.querySelectorAll('.tab')];
    let contents = [...el.querySelectorAll('.tab__content')];

    tabs.forEach((currentTab, index) => {
        currentTab.addEventListener('click', e => {
            tabs.forEach(el => el.classList.remove('tab_active'));
            contents.forEach(el => el.classList.remove('tab__content_active'));
            currentTab.classList.add('tab_active');

            if (currentTab.classList.contains('tab_active')) {
                contents[index].classList.add('tab__content_active');
            }
        })
    });
})