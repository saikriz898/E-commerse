const cart = JSON.parse(localStorage.getItem('cart')) || [];
function toggleShoppingCart() {
    const currentPage = window.location.pathname.split('/').pop();
    const productPages = [
        'iphone 16 pro max.html',
        'iphone 16 plus.html',
        'iphone 15 plus.html',
        'iphone 15 pro max.html',
        'samsung galaxy s23 fe.html',
        'samsung galaxy s24 fe.html',
        'samsung galaxy s23 ultra.html',
        'samsung galaxy s24 ultra.html'
    ];

    if (productPages.includes(currentPage)) {
        window.location.href = 'cart.html';
    } else if (currentPage === 'cart.html') {
        window.location.href = 'shop.html';
    } else {
        window.location.href = 'cart.html';
    }
}
function addToCart(productName, productPrice, productImage) {
    const product = { name: productName, price: productPrice, image: productImage, quantity: 1 };
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
    updateCart();
}

function updateCart() {
    const listcard = document.querySelector('.listcard');
    const totalElement = document.querySelector('.total');
    const quantityElement = document.querySelector('.quantity');
    listcard.innerHTML = '';
    let total = 0;
    let quantity = 0;
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <span>${item.name}</span>
            <span>₹${item.price.toFixed(2)}</span>
            <span>Quantity: ${item.quantity}</span>
            <div class="btn">
            <button class="remove-item" onclick="removeItem('${item.name}')">Remove</button>
            <button class="view-product" onclick="view('${item.name}')">View Product</button>
            </div>
        `;
        listcard.appendChild(div);
        total += item.price * item.quantity;
        quantity += item.quantity;
    });
    totalElement.textContent = total.toFixed(2);
    quantityElement.textContent = quantity;
}
function removeItem(productName) {
    const existingProductIndex = cart.findIndex(item => item.name === productName);
    if (cart[existingProductIndex].quantity > 1) {
        cart[existingProductIndex].quantity -= 1;
    } else {
        cart.splice(existingProductIndex, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}
function view(productName) {
    if (productName === 'iPhone 16 Pro Max') {
        window.location.href = 'iphone 16 pro max.html';
    } else if (productName === 'iPhone 16 Plus') {
        window.location.href = 'iphone 16 plus.html';
    } else if (productName === 'iPhone 15 Plus') {
        window.location.href = 'iphone 15 plus.html';
    }
    else if(productName === 'iPhone 15 Pro Max') {
        window.location.href = 'iphone 15 pro max.html';
    }
    else if(productName === 'Samsung Galaxy S23 FE') {
        window.location.href = 'samsung galaxy s23 fe.html';
    }
    else if(productName === 'Samsung Galaxy S24 FE') {
        window.location.href = 'samsung galaxy s24 fe.html';
    }
    else if(productName === 'Samsung Galaxy S23 Ultra') {
        window.location.href = 'samsung galaxy s23 ultra.html';
    }
    else if(productName === 'Samsung Galaxy S24 Ultra') {
        window.location.href = 'samsung galaxy s24 ultra.html';
    }
    else{
        window.location.href = 'shop.html';
    }
}
function clearCart() {
    cart.length = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}
function closeShoppingCart() {
    window.location.href = 'shop.html';
}
document.addEventListener('DOMContentLoaded', updateCart);
let currentSlide = 0;

function moveSlider(direction) {
    const slider = document.querySelector('.slider');
    const products = document.querySelectorAll('.product');
    const totalSlides = products.length;
    const slideWidth = products[0].offsetWidth;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    slider.scrollLeft = currentSlide * slideWidth;
}