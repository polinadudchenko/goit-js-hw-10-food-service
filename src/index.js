import './sass/main.scss';
import menu from "../src/menu.json";
import menuCardTpl from "../src/templates/menu-card.hbs";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector(".menu");
const menuMarkup = createMenuCards(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

const switcher = document.getElementById('theme-switch-toggle');
switcher.addEventListener('change', changeTheme);

localStorage.setItem('theme', setInitialTheme());

function createMenuCards(menuCards) {
    return menuCardTpl(menuCards)
}

function changeTheme() {
    if (localStorage.getItem('theme') === Theme.LIGHT) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
    } else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
    }
    localStorage.setItem('theme', document.body.className);
}

function setInitialTheme() {
    if (localStorage.getItem('theme') === Theme.LIGHT || localStorage.getItem('theme') === null){
        document.body.classList.add(Theme.LIGHT);
    } else {
        document.body.classList.add(Theme.DARK);
        switcher.checked = "true";
    }
    return document.body.className;
}
