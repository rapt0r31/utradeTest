let brgMenu = document.querySelector('#burger-menu');
let brgMenuActive = document.querySelector('#burger-menu--active');
let headerMobile = document.querySelector('.header__mobile');
brgMenu.addEventListener('click', function() {
    headerMobile.classList.add('header__mobile-active');
});
brgMenuActive.addEventListener('click', function() {
    headerMobile.classList.remove('header__mobile-active');
});