'use strict';


document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.hbg-menu').classList.toggle('is-active');
    document.querySelector('.menu-btn').classList.toggle('.isClosed');
});

