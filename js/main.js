const menuToggle = document.querySelector('.hamburger');
const mainMenu = document.querySelector('.main-menu');
const scrollState = document.querySelector('.scrollable');
const hamburgerOpen = document.querySelector('.hamburger-open');
const hamburgerClose = document.querySelector('.hamburger-close');

function toggleMenu() {
    scrollState.classList.toggle('disable-scroll');
    mainMenu.classList.toggle('main-menu--active');
    hamburgerOpen.classList.toggle('hamburger-open--active');
    hamburgerClose.classList.toggle('hamburger-close--active');
}

menuToggle.addEventListener('click', toggleMenu);

