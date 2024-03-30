

$(document).ready(function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // check page
    if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
        // Home page
        console.log('Home page');
    } else if (window.location.pathname == '/about') {
        // About page
        console.log('About page');
    } else if (window.location.pathname == '/progetti-pubblici') {

    } else if (window.location.pathname == '/progetti-privati') {

    } else if (window.location.pathname == '/gare') {
        
    } else {
        // redirect to home
        window.location = '/';
    }
});