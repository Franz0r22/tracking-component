const menuClosed = document.getElementById('menuClosed');
const menuIcon = document.getElementById('menuIcon');
const lista = document.getElementById('lista');
console.log(lista);

menuIcon.addEventListener('click', function iconChange() {
    menuIcon.style.height = '0';
    menuClosed.style.height = 'auto';
    lista.style.visibility = 'visible';

}); 

menuClosed.addEventListener('click', function iconChange() {
    menuIcon.style.height = 'auto';
    menuClosed.style.height = '0';
    lista.style.visibility = 'hidden'
    
}); 