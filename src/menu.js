let content = document.getElementById('content');

function loadMenu() {

    let main = document.querySelector('.main');
    main.style.width = '60%';

    main.innerHTML = ''; //clear content from previous page

    let menu = document.createElement('div');
    menu.classList.add('menu-grid');

    //chicken taco menu item
    let chickenTaco = document.createElement('div');
    chickenTaco.classList.add('menu-item');
    let chickenTacoImg = document.createElement('img');
    chickenTacoImg.src = './images/chicken.svg';
    chickenTacoImg.alt = 'chicken taco';
    chickenTaco.appendChild(chickenTacoImg);
    let chickenTacoText = document.createElement('p');
    chickenTacoText.innerHTML = 'Chicken taco';
    chickenTaco.appendChild(chickenTacoText);

    //lamb taco menu item
    let lambTaco = document.createElement('div');
    lambTaco.classList.add('menu-item');
    let lambTacoImg = document.createElement('img');
    lambTacoImg.src = './images/lamb.svg';
    lambTacoImg.alt = 'lamb taco';
    lambTaco.appendChild(lambTacoImg);
    let lambTacoText = document.createElement('p');
    lambTacoText.innerHTML = 'Lamb taco';
    lambTaco.appendChild(lambTacoText);

    //pork taco menu item
    let porkTaco = document.createElement('div');
    porkTaco.classList.add('menu-item');
    let porkTacoImg = document.createElement('img');
    porkTacoImg.src = './images/pork.svg';
    porkTacoImg.alt = 'pork taco';
    porkTaco.appendChild(porkTacoImg);
    let porkTacoText = document.createElement('p');
    porkTacoText.innerHTML = 'Pork taco';
    porkTaco.appendChild(porkTacoText);

    //shrimp taco menu item
    let shrimpTaco = document.createElement('div');
    shrimpTaco.classList.add('menu-item');
    let shrimpTacoImg = document.createElement('img');
    shrimpTacoImg.src = './images/shrimp.svg';
    shrimpTacoImg.alt = 'shrimp taco';
    shrimpTaco.appendChild(shrimpTacoImg);
    let shrimpTacoText = document.createElement('p');
    shrimpTacoText.innerHTML = 'Shrimp taco';
    shrimpTaco.appendChild(shrimpTacoText);

    //steak taco menu item
    let steakTaco = document.createElement('div');
    steakTaco.classList.add('menu-item');
    let steakTacoImg = document.createElement('img');
    steakTacoImg.src = './images/steak.svg';
    steakTacoImg.alt = 'steak taco';
    steakTaco.appendChild(steakTacoImg);
    let steakTacoText = document.createElement('p');
    steakTacoText.innerHTML = 'Steak taco';
    steakTaco.appendChild(steakTacoText);

    //veggie taco menu item
    let veggieTaco = document.createElement('div');
    veggieTaco.classList.add('menu-item');
    let veggieTacoImg = document.createElement('img');
    veggieTacoImg.src = './images/veggie.svg';
    veggieTacoImg.alt = 'veggie taco';
    veggieTaco.appendChild(veggieTacoImg);
    let veggieTacoText = document.createElement('p');
    veggieTacoText.innerHTML = 'Veggie taco';
    veggieTaco.appendChild(veggieTacoText);

    menu.appendChild(chickenTaco);
    menu.appendChild(lambTaco);
    menu.appendChild(porkTaco);
    menu.appendChild(shrimpTaco);
    menu.appendChild(steakTaco);
    menu.appendChild(veggieTaco);
    main.appendChild(menu);
}

export {loadMenu};