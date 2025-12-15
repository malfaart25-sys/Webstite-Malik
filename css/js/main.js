const menu = document.querySelector('.menu');
const humbergermenu = document.querySelector('.humberger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

humbergermenu.addEventListener('click', displaymenu);
menu.addEventListener('click', displaymenu);

function displaymenu(){
    if(menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';
    } else {
        menu.classList.add('tampil');
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';
    }
}