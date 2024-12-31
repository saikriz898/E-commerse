let products = [
    { id: 1, name: 'Iphone 16 Pro Max', image: 'asserts/image/Iphone/iphone-16-pro max.webp', price: 184900,para: 'The iPhone 16 Pro Max features a stunning design, advanced A18 Bionic chip, improved camera system, and longer battery life.'},
    { id: 2, name: 'Iphone 16 Plus', image: 'asserts/image/Iphone/iphone 16 plus.webp', price: 119900 ,para:'The iPhone 15 Plus combines a sleek design with cutting-edge technology, offering a premium user experience.'},
    { id: 3, name: 'Iphone 15 Pro Max', image: 'asserts/image/Iphone/iPhone_15_Pro_Max.webp', price: 179900,para: 'The iPhone 15 Pro Max features a powerful A17 Bionic chip and an advanced camera system, delivering exceptional performance and photography.'},
    { id: 4, name: 'Iphone 15 Plus', image: 'asserts/image/Iphone/iphone 15 plus.webp', price: 93900 ,para:'The iPhone 15 Plus combines a sleek design with cutting-edge technology, offering a premium user experience.'},
    { id: 5, name: 'Samsung Galaxy S24 Ultra', image: 'asserts/image/samsung/samsung galaxy s24 ultra.jpg', price: 99999,para: 'The Samsung Galaxy S24 Ultra offers cutting-edge technology, a powerful Exynos 2300 chip, and an exceptional camera system'},
    { id: 6, name: 'Samsung Galaxy S24 FE', image: 'asserts/image/samsung/samsung galaxy s24 FE.jfif', price: 74999, para:'The Samsung Galaxy S24 FE combines a sleek design with advanced features, making it perfect for everyday use and productivity.'},
    { id: 7, name: 'Samsung Galaxy S23 Ultra', image: 'asserts/image/samsung/samsung galaxy s23 ultra.webp', price: 89999,para:'The Samsung Galaxy S23 Ultra features a stunning design, advanced Exynos 2200 chip, improved camera system, and longer battery life.' },
    { id: 8, name: 'Samsung Galaxy S23 FE', image: 'asserts/image/samsung/Samsung-Galaxy-S23-FE.jpg', price: 74999 ,para:'The Samsung Galaxy S23 FE offers a balanced performance with a sleek design, making it a great choice for everyday use.'}, 
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
            <p>${product.price}</p>
            <p class="para">${product.para}</p>
            <button onclick="addToCart(${index})">Add to Cart<i class='bx bx-shopping-bag'></i></button>
            <button onclick="buyNow(${index})">Buy Now<i class='bx bx-chevrons-right'></i></button>`
        ;
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
        newDiv.classList.add('products');
        newDiv.innerHTML = `
            <div class="item">
            <img src="${item.image}" alt="${item.name}" />
            <p>${item.name}</p>
            <p>${item.price}</p>
            <p class="remove">Quantity: 
                <input type="number" value="${item.quantity}" min="0" onchange="updateQuantity(${index}, this.value)">
            </p>
            <button onclick="removeFromCart(${index})" >Remove</button>
            </div>
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
cart[index].quantity = 0;
cart = cart.filter(item => item.quantity > 0); 
localStorage.setItem('cart', JSON.stringify(cart));
reloadCart();
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
