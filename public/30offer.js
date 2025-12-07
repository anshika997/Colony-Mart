const offerProducts = [
    { id: 1, name: "Fresh Apples", price: 70 , shop: "Mr. Gupta", image: "/images/apple.jpeg" },
    { id: 2, name: "Whole Wheat Bread", price: 40, shop: "Daily Bakery", image: "/images/wheat bread.jpg" },
    { id: 3, name: "Honey Jar", price: 200, shop: "Nature’s Delight", image: "/images/honey.jpg" },
    { id: 4, name: "Brown Eggs - Dozen", price: 120, shop: "Happy Farm Eggs", image: "/images/egg.jpg" },
    { id: 5, name: "Basmati Rice", price: 75, shop: "Shree Sai Grains", image: "/images/rice.jpg" },
    { id: 6, name: "Almonds - 500g", price: 350, shop: "Dry Fruit Mart", image: "/images/almonds.jpg" },
    { id: 7, name: "Olive Oil - 1L", price: 800, shop: "Nature’s Delight", image: "/images/olive oil.webp" },
    { id: 8, name: "Face Mask", price: 90, shop: "Mr. Sharma", image: "/images/face msk.jpg" },
];

function displayOfferProducts() {
    const container = document.getElementById('offer-products');
    container.innerHTML = offerProducts.map(product => `
        <div class="product-card">
            <div class="discount-badge">30% OFF</div>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p class="shop-name">Shop: ${product.shop}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = offerProducts.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

displayOfferProducts();
