let products = [
    { id: 1, name: 'iphone 15 plus', image: 'Images/Iphone/iphone 15 plus.webp', price: 93900 },
    { id: 2, name: 'iphone 15 pro max', image: 'Images/Iphone/iPhone_15_Pro_Max.webp', price: 179900 },
    { id: 3, name: 'iphone 16 plus', image: 'Images/Iphone/iphone 16 plus.webp', price: 119900 },
    { id: 4, name: 'iphone 16 pro max', image: 'Images/Iphone/iphone-16-pro max.webp', price: 184900 },
    { id: 5, name: 'samsung galaxy s23', image: 'Images/samsung/Samsung-Galaxy-S23-FE.jpg', price: 74999 },
    { id: 6, name: 'samsung galaxy s23 ultra', image: 'Images/samsung/samsung galaxy s23 ultra.webp', price: 89999 },
    { id: 7, name: 'samsung galaxy s24', image: 'Images/samsung/samsung galaxy s24 FE.jfif', price: 74999 },
    { id: 8, name: 'samsung galaxy s24 ultra', image: 'Images/samsung/samsung galaxy s24 ultra.jpg', price: 99999 },
];
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function initApp() {
    let list = document.querySelector('.list');
    products.forEach((product, index) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('product');
        newDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <p>${product.name}</p>
            <p>Price: ${product.price}</p>
            <button onclick="addToCart(${index})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    });
}

function addToCart(index) {
    if (!cart.some(item => item.id === products[index].id)) {
        cart.push({ ...products[index], quantity: 1 });
    } else {
        cart = cart.map(item =>
            item.id === products[index].id ? { ...item, quantity: item.quantity + 1 } : item
        );
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${products[index].name} has been added to your cart.`);
}

function openShoppingCart() {
    document.querySelector('.list').style.display = 'none';
    document.querySelector('.cart').style.display = 'block';
    document.querySelector('.closeshopping').style.display = 'block';
    document.querySelector('.shopping').style.display = 'none';
    reloadCart();
}

function closeShoppingCart() {
    document.querySelector('.cart').style.display = 'none';
    document.querySelector('.list').style.display = 'flex';
    document.querySelector('.closeshopping').style.display = 'none';
    document.querySelector('.shopping').style.display = 'block';
}

function continueShopping() {
    closeShoppingCart();
}

function reloadCart() {
    let listcard = document.querySelector('.listcard');
    listcard.innerHTML = '';
    let total = 0;
    let quantity = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        quantity += item.quantity;

        let newDiv = document.createElement('div');
        newDiv.classList.add('product');
        newDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <p>${item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: 
                <input type="number" value="${item.quantity}" min="0" onchange="updateQuantity(${index}, this.value)">
            </p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        listcard.appendChild(newDiv);
    });

    document.querySelector('.total').innerText = total.toFixed(2);
    document.querySelector('.quantity').innerText = quantity;
}

function updateQuantity(index, quantity) {
    quantity = parseInt(quantity);
    if (quantity <= 0) {
        cart.splice(index, 1);
    } else {
        cart[index].quantity = quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    reloadCart();
}

function removeFromCart(index) {
cart[index].quantity = 0; // Reset the quantity to zero
cart = cart.filter(item => item.quantity > 0); // Remove the item from the cart
localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart
reloadCart(); // Refresh the cart display
}
initApp();
