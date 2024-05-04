const hamButton = document.querySelector('#nav-button');
const navMenu = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamButton.classList.toggle('open');
})