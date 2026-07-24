// Premium, royalty-free spiritual placeholder imagery for visual appeal
const products = [
    {
        id: 1,
        name: "Irish Sea Moss",
        originalPrice: 20.00,
        myPrice: 60.00,
        image: "https://unsplash.com",
        category: "Supplements"
    },
    {
        id: 2,
        name: "Soursop 7 Archangels",
        originalPrice: 40.00,
        myPrice: 120.00,
        image: "https://unsplash.com",
        category: "Supplements"
    },
    {
        id: 3,
        name: "The Foundational Wellness Bundle",
        originalPrice: 150.00,
        myPrice: 450.00,
        image: "https://unsplash.com",
        category: "Bundles"
    },
    {
        id: 4,
        name: "Palo Santo Incense",
        originalPrice: 2.00,
        myPrice: 6.00,
        image: "https://unsplash.com",
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
                    <button class="add-to-cart-btn" onclick="redirectToEmail('${product.name}', ${product.myPrice})">Order via Email</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Function to automatically format and launch a structured Gmail purchase order
function redirectToEmail(productName, price) {
    // Put your business email address right here
    const businessEmail = "orionshealer.shop@gmail.com"; 
    
    // Set a clean, professional subject line
    const subject = `New Order Request: ${productName} - Orion's Healer`;
    
    // Build a structured invoice form text for the customer to fill out in their email app
    const emailBody = `Hello Orion's Healer team,\n\nI would like to place an order for the following spiritual wellness product:\n\n✨ PRODUCT DETAILS:\n-----------------------------\nProduct Name: ${productName}\nUnit Price: $${price.toFixed(2)}\n\n📦 MY SHIPPING DETAILS:\n-----------------------------\nFull Name: \nDelivery Address: \nPhone Number: \n\nPlease reply to this email with your manual payment options (Bank Transfer / Card link) so I can complete my order.\n\nThank you!`;
    
    // Convert text blocks cleanly into secure URL characters
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);
    
    // Build the mail protocol string
    const mailtoUrl = `mailto:${businessEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Direct the user's browser to execute the email draft launch
    window.location.href = mailtoUrl;
}

window.onload = displayProducts;
