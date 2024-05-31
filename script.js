// Select the hamburger icon and the navigation menus
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navMenu2 = document.querySelector('.nav-menu-2');

// Add event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger and nav menus
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenu2.classList.toggle('active');
});
