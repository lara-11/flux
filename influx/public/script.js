// Select the hamburger icon and the navigation menus
const navBar = document.querySelector('#navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navMenu2 = document.querySelector('.nav-menu2');
const navItems = document.querySelectorAll('.nav-menu .nav-item');
const navItems2 = document.querySelectorAll('.nav-menu2 .nav-item');

// Define unique delay values for each nav item (in milliseconds)
const navItemDelays = [50, 150, 250, 350, 450]; // adjust these values as needed
const navItem2Delays = [550, 650, 750]; // adjust these values as needed

// Add event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger and nav menus
    navBar.classList.toggle('active');
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenu2.classList.toggle('active');

    // Toggle the 'active' class for each nav item with different delays
    navItems.forEach((item, index) => {
        const delay = navItemDelays[index] || 0; // fallback to 0 if not specified
        setTimeout(() => {
            item.classList.toggle('active');
        }, delay);
    });

    navItems2.forEach((item, index) => {
        const delay = navItem2Delays[index] || 0; // fallback to 0 if not specified
        setTimeout(() => {
            item.classList.toggle('active');
        }, delay);
    });
});


// Handles Section 1 Content Slider
document.addEventListener("DOMContentLoaded", function() {
    const sliderLinks = document.querySelectorAll(".slider-link");
    const slides = document.querySelectorAll(".slide");

    sliderLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Remove active class from all links
            sliderLinks.forEach(function(link) {
                link.classList.remove("active");
            });
            // Add active class to clicked link
            this.classList.add("active");

            // Get the index of the clicked link
            const index = parseInt(this.getAttribute("data-slide"));

            // Hide all slides
            slides.forEach(function(slide) {
                slide.classList.remove("active");
            });

            // Show the corresponding slide
            slides[index].classList.add("active");
        });
    });
});

