const products = [
    { id: 1, name: "Fresh Apples", price: 100, shop: "Mr. Gupta", image: "/images/apple.jpeg" },
    { id: 2, name: "Organic Bananas", price: 50, shop: "Shree Sai Fruits", image: "/images/bananas.jpg" },
    { id: 3, name: "Whole Wheat Bread", price: 40, shop: "Daily Bakery", image: "/images/wheat bread.jpg" },
    { id: 4, name: "Milk - 1L", price: 60, shop: "Green Dairy", image: "/images/milk.jpg" },
    { id: 5, name: "Basmati Rice", price: 400, shop: "Shree Sai Grains", image: "/images/rice.jpg" },
    { id: 6, name: "Organic Spinach", price: 30, shop: "Mr. Gupta", image: "/images/spinach.jpg" },
    { id: 7, name: "Brown Eggs - Dozen", price: 240, shop: "Happy Farm Eggs", image: "/images/egg.jpg" },
    { id: 8, name: "Honey Jar", price: 720, shop: "Nature’s Delight", image: "/images/honey.jpg" },
    { id: 9, name: "Almonds - 500g", price: 500, shop: "Dry Fruit Mart", image: "/images/almonds.jpg" },
    { id: 10, name: "Shampoo", price: 400, shop: "Mr. Sharma", image: "/images/shampoo.jpg" },
    { id: 11, name: "Toothpaste", price: 120, shop: "Shree Sai Hygiene", image: "/images/toothpaste.webp" },
    { id: 12, name: "Olive Oil - 1L", price: 160, shop: "Nature’s Delight", image: "/images/olive oil.webp" },
    { id: 13, name: "Salt - 1kg", price: 20, shop: "Spices & More", image: "/images/salt.jpg" },
    { id: 14, name: "Black Pepper", price: 50, shop: "Spices & More", image: "/images/black pepper.jpg" },
    { id: 15, name: "Cooking Pot", price: 500, shop: "Kitchen Essentials", image: "/images/cooking pot.jpg" },
    { id: 16, name: "Face mask", price: 100, shop: "Mr. Sharma", image: "/images/face msk.jpg" },
    { id: 17, name: "Chocolate Bar", price: 200, shop: "Candy & Sweets", image: "/images/chocolate.jpg" },
    { id: 18, name: "Sugar - 1kg", price: 45, shop: "Daily Mart", image: "/images/sugar.webp" },
    { id: 19, name: "Green Tea", price: 140, shop: "Health First", image: "/images/green tea.webp" },
    { id: 20, name: "Noodles Pack", price: 130, shop: "Daily Mart", image: "/images/noodles.jpg" }
];

function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <p class="shop-name">${product.shop}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === id);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
    }
}

displayProducts();



// const products = [
//     { id: 1, name: "Fresh Apples", price: "₹100", shop: "Mr. Gupta", image: "/apple.jpeg" },
//     { id: 2, name: "Organic Bananas", price: "₹50", shop: "Shree Sai Fruits", image: "/bananas.jpg" },
//     { id: 3, name: "Whole Wheat Bread", price: "₹40", shop: "Daily Bakery", image: "/wheat bread.jpg" },
//     { id: 4, name: "Milk - 1L", price: "₹60", shop: "Green Dairy", image: "/milk.jpg" },
//     { id: 5, name: "Basmati Rice", price: "₹400", shop: "Shree Sai Grains", image: "/rice.jpg" },
//     { id: 6, name: "Organic Spinach", price: "₹30", shop: "Mr. Gupta", image: "/spinach.jpg" },
//     { id: 7, name: "Brown Eggs - Dozen", price: "₹240", shop: "Happy Farm Eggs", image: "/egg.jpg" },
//     { id: 8, name: "Honey Jar", price: "₹720", shop: "Nature’s Delight", image: "/honey.jpg" },
//     { id: 9, name: "Almonds - 500g", price: "₹500", shop: "Dry Fruit Mart", image: "/almonds.jpg" },
//     { id: 10, name: "Shampoo", price: "₹400", shop: "Mr. Sharma", image: "/shampoo.jpg" },
//     { id: 11, name: "Toothpaste", price: "₹120", shop: "Shree Sai Hygiene", image: "/toothpaste.webp" },
//     { id: 12, name: "Olive Oil - 1L", price: "₹160", shop: "Nature’s Delight", image: "/olive oil.webp" },
//     { id: 13, name: "Salt - 1kg", price: "₹20", shop: "Spices & More", image: "/salt.jpg" },
//     { id: 14, name: "Black Pepper", price: "₹50", shop: "Spices & More", image: "/black pepper.jpg" },
//     { id: 15, name: "Cooking Pot", price: "₹500", shop: "Kitchen Essentials", image: "/cooking pot.jpg" },
//     { id: 16, name: "Face mask", price: "₹100", shop: "Mr. Sharma", image: "/face msk.jpg" },
//     { id: 17, name: "Chocolate Bar", price: "₹200", shop: "Candy & Sweets", image: "/chocolate.jpg" },
//     { id: 18, name: "Sugar - 1kg", price: "₹45", shop: "Daily Mart", image: "/sugar.webp" },
//     { id: 19, name: "Green Tea", price: "₹140", shop: "Health First", image: "/green tea.webp" },
//     { id: 20, name: "Noodles Pack", price: "₹130", shop: "Daily Mart", image: "/noodles.jpg" }
// ];

// function displayProducts() {
//     const container = document.getElementById('products-container');
//     container.innerHTML = products.map(product => `
//         <div class="product-card">
//             <img src="${product.image}" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <p>${product.price}</p>
//             <p class="shop-name">${product.shop}</p>
//             <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
//         </div>
//     `).join('');
// }

// function addToCart(id) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const product = products.find(p => p.id === id);
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// displayProducts();


// // Sample product data with shopkeeper/shop names
// const products = [
//     { id: 1, name: "Fresh Apples", price: "100₹", shop: "Mr. Gupta", image: "/apple.jpeg" },
//     { id: 2, name: "Organic Bananas", price: "50₹", shop: "Shree Sai Fruits", image: "/bananas.jpg" },
//     { id: 3, name: "Whole Wheat Bread", price: "40₹", shop: "Daily Bakery", image: "/wheat bread.jpg" },
//     { id: 4, name: "Milk - 1L", price: "60₹", shop: "Green Dairy", image: "/milk.jpg" },
//     { id: 5, name: "Basmati Rice", price: "₹400", shop: "Shree Sai Grains", image: "/rice.jpg" },
//     { id: 6, name: "Organic Spinach", price: "₹30", shop: "Mr. Gupta", image: "/spinach.jpg" },
//     { id: 7, name: "Brown Eggs - Dozen", price: "₹240", shop: "Happy Farm Eggs", image: "/egg.jpg" },
//     { id: 8, name: "Honey Jar", price: "₹720", shop: "Nature’s Delight", image: "/honey.jpg" },
//     { id: 9, name: "Almonds - 500g", price: "₹500", shop: "Dry Fruit Mart", image: "/almonds.jpg" },
//     { id: 10, name: "Shampoo", price: "₹400", shop: "Mr. Sharma", image: "/shampoo.jpg" },
//     { id: 11, name: "Toothpaste", price: "₹120", shop: "Shree Sai Hygiene", image: "/toothpaste.webp" },
//     { id: 12, name: "Olive Oil - 1L", price: "₹160", shop: "Nature’s Delight", image:"/olive oil.webp" },
//     { id: 13, name: "Salt - 1kg", price: "₹20", shop: "Spices & More", image: "/salt.jpg" },
//     { id: 14, name: "Black Pepper", price: "₹50", shop: "Spices & More", image: "/black pepper.jpg" },
//     { id: 15, name: "Cooking Pot", price: "₹500", shop: "Kitchen Essentials", image: "/cooking pot.jpg" },
//     { id: 16, name: "Face mask", price: "₹100", shop: "Mr. Sharma", image: "/face msk.jpg" },
//     { id: 17, name: "Chocolate Bar", price: "₹200", shop: "Candy & Sweets", image: "/chocolate.jpg" },
//     { id: 18, name: "Sugar - 1kg", price: "₹45", shop: "Daily Mart", image: "/sugar.webp" },
//     { id: 19, name: "Green Tea", price: "₹140", shop: "Health First", image: "green tea.webp" },
//     { id: 20, name: "Noodles Pack", price: "₹130", shop: "Daily Mart", image: "noodles.jpg" },
// ];

// // Get the products container
// const productsContainer = document.getElementById('products-container');

// // Function to create a product card
// function createProductCard(product) {
//     const card = document.createElement('div');
//     card.className = 'product-card';

//     const img = document.createElement('img');
//     img.src = product.image;
//     img.alt = product.name;

//     const name = document.createElement('h3');
//     name.textContent = product.name;

//     const price = document.createElement('p');
//     price.textContent = product.price;

//     const shop = document.createElement('p');
//     shop.className = 'shop-name';
//     shop.textContent = `Shop: ${product.shop}`;

//     const addToCartBtn = document.createElement('button');
//     addToCartBtn.className = 'add-to-cart-btn';
//     addToCartBtn.textContent = 'Add to Cart';
//     addToCartBtn.onclick = () => addToCart(product);

//     card.appendChild(img);
//     card.appendChild(name);
//     card.appendChild(price);
//     card.appendChild(shop);
//     card.appendChild(addToCartBtn);

//     return card;
// }

// // Function to display products on the page
// function displayProducts() {
//     productsContainer.innerHTML = ''; // Clear previous content
//     products.forEach(product => {
//         const productCard = createProductCard(product);
//         productsContainer.appendChild(productCard);
//     });
// }

// // Function to add a product to the cart
// function addToCart(product) {
//     alert(`${product.name} from ${product.shop} added to cart!`);
// }

// // Initialize the products display
// displayProducts();
