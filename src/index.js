import './styles.css';
import './fontawesome.js';
import createMain from './mainPage.js';
import createMenu from './menuPage.js';
import createFooter from './commonFooter.js';
import createChefs from './chefPage.js';
const body = document.querySelector('body');
let container = 0;
let footer = 0;
let navTab;

function createNavTab(focus){
    navTab = document.createElement('div');
    const main = document.createElement('p');
    const menu = document.createElement('p');
    const chefs = document.createElement('p');
    main.textContent = 'MainPage';
    menu.textContent = 'Menu';
    chefs.textContent = 'Chefs';
    main.classList.add('main-page');
    menu.classList.add('menu-page');
    chefs.classList.add('chefs-page');
    main.addEventListener('click', mainEvent);
    menu.addEventListener('click', menuEvent);
    chefs.addEventListener('click', chefsEvent);
    if(focus=='main-page'){
        if(Array.from(menu.classList).includes('active-focus')){
            menu.classList.remove('active-focus');
        }else if(Array.from(chefs.classList).includes('active-focus')){
            chefs.classList.remove('active-focus');
        }
        main.classList.add('active-focus');
    }else if(focus=='menu-page'){
        if(Array.from(main.classList).includes('active-focus')){
            main.classList.remove('active-focus');
        }else if(Array.from(chefs.classList).includes('active-focus')){
            chefs.classList.remove('active-focus');
        }
        menu.classList.add('active-focus');
    }else if(focus=='chefs-page'){
        if(Array.from(main.classList).includes('active-focus')){
            main.classList.remove('active-focus');
        }else if(Array.from(menu.classList).includes('active-focus')){
            menu.classList.remove('active-focus');
        }
        chefs.classList.add('active-focus');
    }
    navTab.appendChild(main);
    navTab.appendChild(menu);
    navTab.appendChild(chefs);
    navTab.classList.add('navigator-tab');
    return navTab;
}

function mainEvent() {
    container = createMain();
    footer = createFooter();
    body.textContent = '';
    navTab = createNavTab('main-page');
    body.appendChild(navTab);
    body.appendChild(container);
    body.appendChild(footer);
}

function menuEvent() {
    container = createMenu();
    footer = createFooter();
    body.textContent = '';
    navTab = createNavTab('menu-page');
    body.appendChild(navTab);
    body.appendChild(container);
    body.appendChild(footer);
}

function chefsEvent() {
    container = createChefs();
    footer = createFooter();
    body.textContent = '';
    navTab = createNavTab('chefs-page');
    body.appendChild(navTab);
    body.appendChild(container);
    body.appendChild(footer);
}

mainEvent();
