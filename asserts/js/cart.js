let cart = JSON.parse(localStorage.getItem('cart')) || [];

function toggleShoppingCart() {
    const cart = document.querySelector('.cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
}

function closeShoppingCart() {
    document.querySelector('.cart').style.display = 'none';
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}
function continueShopping(){
    document.querySelector('.cart').style.display = 'none';
}


function addToCart(productName, productPrice, productQuantity, productImage) {
    let total = document.querySelector('.total').textContent;
    let quantity = document.querySelector('.quantity').textContent;
    total = parseInt(total);
    quantity = parseInt(quantity);
    total += productPrice * productQuantity;
    quantity += productQuantity;
    document.querySelector('.total').textContent = total;
    document.querySelector('.quantity').textContent = quantity;

    let existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += productQuantity;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: productQuantity, image: productImage });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    toggleShoppingCart();
}

function renderCart() {
    let productList = document.querySelector('.listcard');
    productList.innerHTML = '';
    let total = 0;
    let totalQuantity = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        totalQuantity += item.quantity;

        let product = document.createElement('div');
        product.classList.add(`product-${item.name.replace(/\s+/g, '-').toLowerCase()}`);
        product.innerHTML = `<img src="asserts/image/${item.image}" alt="${item.name}"><p>${item.name}</p><p>₹${item.price.toLocaleString()}</p><p>Quantity: <span class="product-quantity">${item.quantity}</span></p>`;
        productList.appendChild(product);
    });

    document.querySelector('.total').textContent = total.toLocaleString();
    document.querySelector('.quantity').textContent = totalQuantity;
}
function removeProduct(productName) {
    let product = cart.find(item => item.name === productName);
    let total = document.querySelector('.total').textContent;
    let quantity = document.querySelector('.quantity').textContent;
    total = parseInt(total);
    quantity = parseInt(quantity);
    total -= product.price * product.quantity;
    quantity -= product.quantity;
    document.querySelector('.total').textContent = total;
    document.querySelector('.quantity').textContent = quantity;

    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

document.addEventListener('DOMContentLoaded', renderCart);