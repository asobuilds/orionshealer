// Premium, royalty-free spiritual placeholder imagery for visual appeal
const products = [
    {
        id: 1,
        name: "Irish Sea Moss",
        originalPrice: 20.00,
        myPrice: 60.00,
        image: "https://unsplash.com", // Wellness focus
        category: "Supplements"
    },
    {
        id: 2,
        name: "Soursop 7 Archangels",
        originalPrice: 40.00,
        myPrice: 120.00,
        image: "https://unsplash.com", // Natural apothecary focus
        category: "Supplements"
    },
    {
        id: 3,
        name: "The Foundational Wellness Bundle",
        originalPrice: 150.00,
        myPrice: 450.00,
        image: "https://unsplash.com", // Premium ritual setup
        category: "Bundles"
    },
    {
        id: 4,
        name: "Palo Santo Incense",
        originalPrice: 2.00,
        myPrice: 6.00,
        image: "https://unsplash.com", // Burning aromatherapy focus
        category: "Incense"
    }
];

function displayProducts() {
    const productGrid = document.getElementById('products');
    productGrid.innerHTML = "";

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.myPrice.toFixed(2)}</p>
                    <button class="add-to-cart-btn" onclick="redirectToWhatsApp('${product.name}', ${product.myPrice})">Order via Chat</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Function to automatically format and open a direct WhatsApp transaction chat
function redirectToWhatsApp(productName, price) {
    const myPhoneNumber = "2348000000000"; // Replace with your real phone number including country code
    const message = `Hello Orion's Healer! I would like to purchase the following item:\n\n🔮 Product: ${productName}\n💰 Price: $${price.toFixed(2)}\n\nPlease provide payment details so I can finalize my order.`;
    
    // Encodes characters like spaces and emojis cleanly for browser safety
    const encodedMessage = encodeURIComponent(message);
    const whatsAppUrl = `https://wa.me{myPhoneNumber}?text=${encodedMessage}`;
    
    // Redirects user to WhatsApp in a clean window
    window.open(whatsAppUrl, '_blank');
}

window.onload = displayProducts;
