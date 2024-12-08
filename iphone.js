const productDetails = [
    {
        name: "Apple iPhone 16",
        price: 79900,
        imgSrc: "Images/Iphone/iphone_16.webp",
        inStock: true
    },
    {
        name: "Apple iPhone 15",
        price: 58499,
        imgSrc: "Images/Iphone/iphone_15.webp",
        inStock: true
    },
    {
        name: "Apple iPhone 14 Plus",
        price: 56999,
        imgSrc: "Images/Iphone/iphone_14_plus.webp",
        inStock: true
    },
    {
        name: "Apple iPhone 13",
        price: 56999,
        imgSrc: "Images/Iphone/iphone_13.webp",
        inStock: true
    },
    {
        name: "Apple iPhone 12",
        price: 49999,
        imgSrc: "Images/Iphone/iphone_12.webp",
        inStock: true
    },
    {
        name: "Apple iPhone 11",
        price: 40999,
        imgSrc: "Images/Iphone/iphone_11.webp",
        inStock: true
    },
    {
        name: "Apple iPhone SE",
        price: 39999,
        imgSrc: "Images/Iphone/iphone_se.webp",
        inStock: true
    },
    {
        name: "Apple iPhone XR",
        price: 45999,
        imgSrc: "Images/Iphone/iphone_xr.webp",
        inStock: true
    },
    {
        name: "Apple iPhone XS",
        price: 59999,
        imgSrc: "Images/Iphone/iphone_xs.webp",
        inStock: true
    },
    {
        name: "Apple iPhone X",
        price: 64999,
        imgSrc: "Images/Iphone/iphone_x.webp",
        inStock: true
    }
];

const cartDetails = [];

// Function to render products
function renderProducts() {
    const productContainer = document.querySelector('.iphone-container');
    productDetails.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('iphone-card');
        productCard.innerHTML = `
            <img src="${product.imgSrc}" alt="${product.name}" class="product-img">
            <a href="#" class="product-name">${product.name}</a>
            <p class="product-price">₹ ${product.price.toLocaleString()}</p>
            <button type="button" class="add-to-cart" onclick="addItem(this)">Add To cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

// Function to add item to cart
function addItem(event) {
    let btnClicked = event.parentElement;
    let name = btnClicked.getElementsByClassName("product-name")[0].innerText;
    let price = parseFloat(
        btnClicked.getElementsByClassName("product-price")[0].innerText.replace("₹ ", "").replace(",", "")
    );
    let imgSrc = btnClicked.getElementsByClassName("product-img")[0].src;
    let cartItem = {
        name,
        price,
        imgSrc,
        qty: 1
    };
    cartDetails.push(cartItem);
    renderCart();
    updateCartCount();
    updateCartTotal();
}

// Function to render cart items
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cartDetails.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.name}" class="cart-img">
            <span>${item.name}</span>
            <span>₹ ${item.price.toLocaleString()}</span>
            <span>Qty: ${item.qty}</span>
        `;
        cartItems.appendChild(li);
    });
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartDetails.length;
}

// Function to update cart total
function updateCartTotal() {
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    cartDetails.forEach(item => {
        total += item.price * item.qty;
    });
    cartTotal.textContent = total.toLocaleString();
}

// Initialize products on page load
document.addEventListener('DOMContentLoaded', renderProducts);