export function createMobileMenu() {
    const header = document.querySelector('.js-header');
    const triggerButton = header.querySelector('.js-mobile-menu-trigger');
    const mobileMenu = header.querySelector('.js-mobile-menu');
    const closeMobileMenu = header.querySelector('.js-mobile-menu-close');

    triggerButton.addEventListener('click',()=> {
        mobileMenu.classList.toggle('open');
        header.classList.toggle('open');
    })

    closeMobileMenu.addEventListener('click', ()=> {
        mobileMenu.classList.remove('open');
        header.classList.remove('open');
    })
}