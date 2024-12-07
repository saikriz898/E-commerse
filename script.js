// Add this to your script.js
const toggleButton = document.getElementById('toggle-button');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleButton.classList.toggle('active');
});