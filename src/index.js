import './styles.css';
import './fontawesome.js';
// import createMain from'./mainPage.js';
import createMenu from './menuPage.js';
import createFooter from './commonFooter.js';

const body = document.querySelector('body');
const container = createMenu();
const footer = createFooter();
console.log(container);
console.log(footer);

body.appendChild(container);
body.appendChild(footer);

