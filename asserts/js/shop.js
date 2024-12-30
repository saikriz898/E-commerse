let products = [
    { id: 1, name: 'Iphone 16 Pro Max', image: 'asserts/image/Iphone/iphone-16-pro max.webp', price: 184900 },
    { id: 2, name: 'Iphone 16 Plus', image: 'asserts/image/Iphone/iphone 16 plus.webp', price: 119900 },
    { id: 3, name: 'Iphone 15 Pro Max', image: 'asserts/image/Iphone/iPhone_15_Pro_Max.webp', price: 179900 },
    { id: 4, name: 'Iphone 15 Plus', image: 'asserts/image/Iphone/iphone 15 plus.webp', price: 93900 },
    { id: 5, name: 'Samsung Galaxy S24 Ultra', image: 'asserts/image/samsung/samsung galaxy s24 ultra.jpg', price: 99999 },
    { id: 6, name: 'Samsung Galaxy S24 FE', image: 'asserts/image/samsung/samsung galaxy s24 FE.jfif', price: 74999 },
    { id: 7, name: 'Samsung Galaxy S23 Ultra', image: 'asserts/image/samsung/samsung galaxy s23 ultra.webp', price: 89999 },
    { id: 8, name: 'Samsung Galaxy S23 FE', image: 'asserts/image/samsung/Samsung-Galaxy-S23-FE.jpg', price: 74999 }, 
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
            <button onclick="addToCart(${index})">Add to Cart<i class='bx bx-shopping-bag'></i></button>
            <button onclick="buyNow(${index})">Buy Now<i class='bx bx-chevrons-right'></i></button>
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
    openShoppingCart();
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
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    reloadCart();
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
function buyNow(index) {
    if(products[index].name ==='Iphone 16 Pro Max'){
        window.location.href ="iphone 16 pro max.html";
    }
    else if(products[index].name ==='Iphone 16 Plus'){
        window.location.href ="iphone 16 plus.html";
    }
    else if(products[index].name ==='Iphone 15 Pro Max'){
        window.location.href ="iphone 15 pro max.html";
    }
    else if(products[index].name ==='Iphone 15 Plus'){
        window.location.href ="iphone 15 plus.html";
    }
    else if(products[index].name ==='Samsung Galaxy S24 Ultra'){
        window.location.href ="samsung galaxy s24 ultra.html";
    }
    else if(products[index].name ==='Samsung Galaxy S24 FE'){
        window.location.href ="samsung galaxy s24 FE.html";
    }
    else if(products[index].name ==='Samsung Galaxy S23 Ultra'){
        window.location.href ="samsung galaxy s23 ultra.html";
    }
    else if(products[index].name ==='Samsung Galaxy S23 FE'){
        window.location.href ="samsung galaxy s23 FE.html";
    }
}
initApp();
