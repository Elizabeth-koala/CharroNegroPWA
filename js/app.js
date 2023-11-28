const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

const modal = document.querySelector('.modal');
const modalButtonClose = document.querySelector('.modal__close');

menu.addEventListener('click', function(){

    menuList.classList.toggle('nav__list--show');

});

links.forEach(function(link){

    link.addEventListener('click', function(){

        menuList.classList.remove('nav__list--show');

    })

});

// MODAL

