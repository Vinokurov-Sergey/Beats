const menuOpener = document.querySelector('.hamburger');
const menuElement = document.querySelector('.fullscreen-menu');
const closeElement = document.querySelector('.fullscreen-menu__close');
const body = document.body;

menuOpener.addEventListener('click', e =>{
    e.preventDefault();
    menuElement.classList.add('active');
    body.classList.add('body_noscroll');
})

closeElement.addEventListener('click', e => {
    e.preventDefault();
    menuElement.classList.remove('active');
    body.classList.remove('body_noscroll');
})



