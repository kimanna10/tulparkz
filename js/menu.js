const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');

burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('open');
    mobileNav.classList.toggle('open');
});
