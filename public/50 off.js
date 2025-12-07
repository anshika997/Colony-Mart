
const products = [
    { id: 1, name: "Smartphone", price: 15000, image: "/images/smart phone.jpg" },
    { id: 2, name: "Smart TV", price: 22000, image: "/images/tv.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 3000, image: "/images/speaker.jpg" },
    { id: 4, name: "Headphones", price: 2500, image: "/images/head phone.jpg" },
    { id: 5, name: "Gaming Console", price: 35000, image: "/images/gaming.jpg" }
];

function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>Price: ₹${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
}

displayProducts();
// const products = [
//     { id: 1, name: "Smartphone", price: 15000, image: "images/smartphone.jpg" },
//     { id: 2, name: "Smart TV", price: 22000, image: "images/smarttv.jpg" },
//     { id: 3, name: "Bluetooth Speaker", price: 3000, image: "images/speaker.jpg" },
//     { id: 4, name: "Headphones", price: 2500, image: "images/headphones.jpg" },
//     { id: 5, name: "Gaming Console", price: 35000, image: "images/console.jpg" }
// ];

// function displayProducts() {
//     const container = document.getElementById('products-container');
//     container.innerHTML = products.map(product => `
//         <div class="product-card">
//             <img src="${product.image}" alt="${product.name}">
//             <div class="product-info">
//                 <h4>${product.name}</h4>
//                 <p>Price: ₹${product.price}</p>
//                 <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
//             </div>
//         </div>
//     `).join('');
// }

// function addToCart(id) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const product = products.find(p => p.id === id);
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert(`${product.name} has been added to your cart!`);
// }

// displayProducts();
