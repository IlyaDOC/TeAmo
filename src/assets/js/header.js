document.addEventListener("DOMContentLoaded", () => {
    headerPrepare();
    headerActions();
    headerOnScroll();
})


const headerClose = document.querySelector('.header__menu-js .header__close');
const header = document.getElementById('header');

function headerPrepare() {
    // Элементы из изначального хэдера
    const headerLogo = document.querySelector('.header__logo');
    const headerSocials = document.querySelector('.header__socials');
    const headerNav = document.querySelector('.header__nav nav')

    // Элементы из выпадающего меню
    const headerJsTop = document.querySelector('.header__menu-js-top');
    const headerJsNav = document.querySelector('.header__menu-js-nav');
    const headerJsSocials = document.querySelector('.header__menu-js-socials');

    if (headerJsTop && headerLogo) {
        headerJsTop.insertBefore(headerLogo.cloneNode(true), headerClose);
    }

    if (headerJsNav && headerNav) {
        headerJsNav.appendChild(headerNav.cloneNode(true));
    }

    if (headerJsSocials && headerSocials) {
        headerJsSocials.appendChild(headerSocials.cloneNode(true));
    }
}

function headerActions() {
    const headerMenuToggler = document.querySelector('.header__menu-toggler');
    const headerMenuJs = document.querySelector('.header__menu-js');
    if (headerMenuToggler) {
        headerMenuToggler.addEventListener('click', () => {
            headerMenuJs.classList.add('opened');
            // header.style.backdropFilter = 'none';
            document.body.classList.add('overflow-hidden');
        });
    }

    if (headerClose) {
        headerClose.addEventListener('click', () => {
            headerMenuJs.classList.remove('opened');
            // header.style.backdropFilter = 'blur(5px)';
            document.body.classList.remove('overflow-hidden');
        });
    }
}

function headerOnScroll() {
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('on-scroll');
            } else {
                header.classList.remove('on-scroll');
            }
        })
    }
}