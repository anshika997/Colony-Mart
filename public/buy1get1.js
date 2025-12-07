const products = [
    { id: 1, name: "Fresh Apples", originalPrice: 100, freeItem: "Get 1 Free Apple", image: "/images/apple.jpeg" },
    { id: 2, name: "Organic Bananas", originalPrice: 40, freeItem: "Get 1 Free Bread", image: "/images/wheat bread.jpg" },
    { id: 4, name: "Fresh Milk - 1L", originalPrice: 60, freeItem: "Get 1 Free Milk", image: "/images/milk.jpg" },
    { id: 5, name: "Honey Jar", originalPrice: 720, freeItem: "Get 1 Free Honey Jar", image: "/images/honey.jpg" }
];

function displayBuy1Get1Products() {
    const container = document.getElementById('products-container');
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.originalPrice}</p>
                <p class="offer">${product.freeItem}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === id);

    if (!product) {
        console.error("Product not found");
        return;
    }

    // 💥 Add 'price' field so cart works!
    const productToAdd = {
        ...product,
        price: product.originalPrice // ✅ Set standard 'price' field
    };

    // Check if item already added
    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cart.push(productToAdd); // Add again as free item
        alert(`${product.name} and the free item have been added to your cart!`);
    } else {
        cart.push(productToAdd);
        alert(`${product.name} has been added to your cart!`);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

displayBuy1Get1Products();

// const products = [
//     { id: 1, name: "Fresh Apples", originalPrice: 100, freeItem: "Get 1 Free Apple", image: "/apple.jpeg" },
//     { id: 2, name: "Organic Bananas", originalPrice: 40, freeItem: "Get 1 Free Bread", image: "/wheat bread.jpg" },
//     { id: 4, name: "Fresh Milk - 1L", originalPrice: 60, freeItem: "Get 1 Free Milk", image: "/milk.jpg" },
//     { id: 5, name: "Honey Jar", originalPrice: 720, freeItem: "Get 1 Free Honey Jar", image: "/honey.jpg" }
// ];

// function displayBuy1Get1Products() {
//     const container = document.getElementById('products-container');
//     container.innerHTML = products.map(product => `
//         <div class="product-card">
//             <img src="${product.image}" alt="${product.name}">
//             <div class="product-info">
//                 <h3>${product.name}</h3>
//                 <p>Price: ₹${product.originalPrice}</p>  <!-- Displaying the price correctly -->
//                 <p class="offer">${product.freeItem}</p>
//                 <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
//             </div>
//         </div>
//     `).join('');
// }

// function addToCart(id) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const product = products.find(p => p.id === id);

//     if (!product) {
//         console.error("Product not found");
//         return;  // Exit function if product is not found
//     }

//     // Ensure product's price is treated as a number (in case the price is somehow undefined)
//     const productPrice = product.originalPrice;

//     if (isNaN(productPrice)) {
//         alert("There was an issue with the price. Please try again.");
//         return;
//     }

//     // Add product to the cart
//     let cartItem = cart.find(item => item.id === id);

//     if (cartItem) {
//         // Apply Buy 1 Get 1 offer: Add one more free item
//         cart.push(product); // Add the free item as well
//         alert(`${product.name} and the free item have been added to your cart!`);
//     } else {
//         // Add the product normally
//         cart.push(product);
//         alert(`${product.name} has been added to your cart!`);
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// displayBuy1Get1Products();


// // const products = [
// //     { id: 1, name: "Fresh Apples", originalPrice: "₹100", freeItem: "Get 1 Free Apple", image: "/apple.jpeg" },
// //     { id: 2, name: "Organic Bananas", originalPrice: "₹40", freeItem: "Get 1 Free Bread", image: "/wheat bread.jpg" },
// //     { id: 4, name: "Fresh Milk - 1L", originalPrice: "₹60", freeItem: "Get 1 Free Milk", image: "/milk.jpg" },
// //     { id: 5, name: "Honey Jar", originalPrice: "₹720", freeItem: "Get 1 Free Honey Jar", image: "/honey.jpg" }
// // ];

// // function displayBuy1Get1Products() {
// //     const container = document.getElementById('products-container');
// //     container.innerHTML = products.map(product => `
// //         <div class="product-card">
// //             <img src="${product.image}" alt="${product.name}">
// //             <div class="product-info">
// //                 <h3>${product.name}</h3>
// //                 <p>Price: ${product.originalPrice}</p>
// //                 <p class="offer">${product.freeItem}</p>
// //                 <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
// //             </div>
// //         </div>
// //     `).join('');
// // }

// // function addToCart(id) {
// //     let cart = JSON.parse(localStorage.getItem('cart')) || [];
// //     const product = products.find(p => p.id === id);
// //     cart.push(product);
// //     localStorage.setItem('cart', JSON.stringify(cart));
// //     alert(`${product.name} has been added to your cart!`);
// // }

// // displayBuy1Get1Products();
