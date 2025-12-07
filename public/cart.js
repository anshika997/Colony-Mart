function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountSpan = document.getElementById('total-amount');
    const discountSpan = document.getElementById('discount');
    const finalTotalSpan = document.getElementById('final-total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        totalAmountSpan.textContent = 0;
        discountSpan.textContent = 0;
        finalTotalSpan.textContent = 0;
        return;
    }

    let totalAmount = 0;

    cartItemsContainer.innerHTML = cart.map((item, index) => {
        totalAmount += Number(item.price); // Fix to treat price as number
        return `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p>Price: ₹${item.price}</p>
                </div>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    }).join('');

    // Calculate Discount
    const discount = totalAmount >= 2000 ? 500 : 0;
    const finalTotal = totalAmount - discount;

    totalAmountSpan.textContent = totalAmount;
    discountSpan.textContent = discount;
    finalTotalSpan.textContent = finalTotal;
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

loadCart();



// function loadCart() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     const totalAmountSpan = document.getElementById('total-amount');
//     const discountSpan = document.getElementById('discount');
//     const finalTotalSpan = document.getElementById('final-total');

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     if (cart.length === 0) {
//         cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
//         totalAmountSpan.textContent = 0;
//         discountSpan.textContent = 0;
//         finalTotalSpan.textContent = 0;
//         return;
//     }

//     let totalAmount = 0;

//     cartItemsContainer.innerHTML = cart.map((item, index) => {
//         totalAmount += item.price;
//         return `
//             <div class="cart-item">
//                 <div>
//                     <h4>${item.name}</h4>
//                     <p>Price: ₹${item.price}</p>
//                 </div>
//                 <button onclick="removeItem(${index})">Remove</button>
//             </div>
//         `;
//     }).join('');

//     // Calculate Discount
//     const discount = totalAmount >= 2000 ? 500 : 0;
//     const finalTotal = totalAmount - discount;

//     totalAmountSpan.textContent = totalAmount;
//     discountSpan.textContent = discount;
//     finalTotalSpan.textContent = finalTotal;
// }

// function removeItem(index) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.splice(index, 1); // Remove the item from the cart
//     localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
//     loadCart(); // Reload the cart to reflect changes
// }

// loadCart();







