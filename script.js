const toggleButton = document.getElementById('toggle-button');
const navMenu = document.getElementById('nav-menu');
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    toggleButton.classList.toggle('active');
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Thank you for your message!');
    document.getElementById('contact-form').reset();
});
