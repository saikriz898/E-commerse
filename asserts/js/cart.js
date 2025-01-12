const cart = JSON.parse(localStorage.getItem('cart')) || [];
function toggleShoppingCart() {
    window.location.href = 'cart.html';
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
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <span>${item.name}</span>
            <span>₹${item.price.toFixed(2)}</span>
            <span>Quantity: ${item.quantity}</span>
        `;
        listcard.appendChild(div);
        total += item.price * item.quantity;
        quantity += item.quantity;
    });
    totalElement.textContent = total.toFixed(2);
    quantityElement.textContent = quantity;
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