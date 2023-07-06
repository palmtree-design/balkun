'use strict';


document.querySelector('.MenuBtn').addEventListener('click', function(){
    document.querySelector('.hbg-menu').classList.toggle('is-active');
    document.querySelector('.MenuBtn').classList.toggle('isClosed');
});

document.querySelector('.Menu-Group-Item').addEventListener('click', function(){
    document.querySelector('.hbg-menu').classList.remove('is-active');
    document.querySelector('.MenuBtn').classList.remove('isClosed');
});
