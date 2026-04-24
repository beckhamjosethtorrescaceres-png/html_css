const menu = document.querySelector('#mobile-menu');
const navList = document.querySelector('.nav-list');

menu.addEventListener('click', () => {
    menu.classList.toggle('is-active'); // Esto anima las barritas
    navList.classList.toggle('active'); // Esto muestra el menú
});

// Esto cierra el menú cuando tocas una opción
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        navList.classList.remove('active');
    });
});
