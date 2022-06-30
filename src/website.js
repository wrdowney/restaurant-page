import {loadMenu} from './menu.js';
import {loadHome} from './home';

let content = document.getElementById('content');

//Website header and navbar
function createHeader() {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.innerHTML = 'Taqueria El Ranchito';
    header.appendChild(title);
    header.appendChild(createNavBar());
    return header;
}

function createNavBar() {
    let nav = document.createElement('nav');

    let homeTab = document.createElement('button');
    homeTab.classList.add('tab');
    homeTab.innerHTML = 'Home';
    homeTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(homeTab);
        loadHome();
    });

    let menuTab = document.createElement('button');
    menuTab.classList.add('tab');
    menuTab.innerHTML = 'Menu';
    menuTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(menuTab);
        loadMenu();
    });

    let contactTab = document.createElement('button');
    contactTab.classList.add('tab');
    contactTab.innerHTML = 'Contact';
    contactTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(contactTab);
        loadHome();
    });

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    setActiveTab(homeTab);

    return nav;
}

//Page that is currently loaded
function setActiveTab(button) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    button.classList.add('active');
}

function initializeWebsite() {
    let header = createHeader();
    let main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(header);
    content.appendChild(main);
    loadHome()
}

export {initializeWebsite};