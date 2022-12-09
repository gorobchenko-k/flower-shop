"use strict"

let menuIcon = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');


//на каком устройстве открыта страница
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },

    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },

    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },

    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },

    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if( menuArrows.length > 0) {
        menuArrows.forEach(arrow => arrow.addEventListener("click", function(e) {
            arrow.parentElement.classList.toggle('_active');
        }));
    }
} else {
    document.body.classList.add('_pc');
}


if (menuIcon) {
    menuIcon.addEventListener("click", function(e) {
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}


//плавная прокрутка к разделу страницы с помощью data атрибута
let menuLinks = document.querySelectorAll(".menu__sub-link[data-goto]");
if (menuLinks.length > 0) {
    console.log(menuLinks);
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight - 20;
 

            if (menuBody.classList.contains('_active')) {
                menuBody.classList.remove('_active');
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');

            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();

        }
    }
}