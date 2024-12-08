// Add this to your script.js
const toggleButton = document.getElementById('toggle-button');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
// Add this to your script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display form data in the console (or handle it as needed)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Optionally, you can display a success message or clear the form
    alert('Thank you for your message!');
    document.getElementById('contact-form').reset();
});
