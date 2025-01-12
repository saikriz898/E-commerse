const cart = JSON.parse(localStorage.getItem('cart')) || [];
function toggleShoppingCart() {
    const cart = document.querySelector('.cart');
    if (cart.style.display === 'block') {
    cart.style.display = 'none';
    } else {
    cart.style.display = 'block';
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
    updateCart();
    const cartElement = document.querySelector('.cart');
    cartElement.style.display = 'block';
    cartElement.style.transition = 'opacity 0.5s ease-in-out';
    cartElement.style.opacity = '1';
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
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
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
function viewcart(){
    window.location.href = 'cart.html';
}
function clearCart() {
    cart.length = 0;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}
function closeShoppingCart() {
    document.querySelector('.cart').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', updateCart);