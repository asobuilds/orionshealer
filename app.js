// 1. Core Default Product Data Storage
const initialProducts = [
    {
        id: 1,
        name: "Irish Sea Moss",
        originalPrice: 20.00,
        myPrice: 60.00,
        image: "https://unsplash.com",
        category: "Supplements",
        description: "Premium organic ocean-harvested sea moss loaded with 92 essential minerals to completely clear cognitive mental fog and revitalize your cellular energy matrix."
    },
    {
        id: 2,
        name: "Soursop 7 Archangels",
        originalPrice: 40.00,
        myPrice: 120.00,
        image: "https://unsplash.com",
        category: "Supplements",
        description: "A potent high-vibrational natural apothecary blend engineered to cleanse bodily toxicities, strengthen cellular systems, and anchor deep alignment."
    },
    {
        id: 3,
        name: "The Foundational Wellness Bundle",
        originalPrice: 150.00,
        myPrice: 450.00,
        image: "https://unsplash.com",
        category: "Bundles",
        description: "Our complete ultimate spiritual transition pack. Contains custom wellness guides, daily herbs, and smudging tools to realign your entire life sanctuary track."
    },
    {
        id: 4,
        name: "Palo Santo Incense",
        originalPrice: 2.00,
        myPrice: 6.00,
        image: "https://unsplash.com",
        category: "Incense",
        description: "Authentic, sustainably sourced sacred holy wood incense bars. Perfect for clearing away residual heavy environmental energies before running daily meditations."
    }
];

// 2. Pre-Loaded Customer Reviews Database
const defaultReviews = [
    { name: "Malik K.", rating: 5, text: "The Irish Sea Moss completely transformed my morning routines. The persistent brain fog I struggled with as a student vanished within 4 days." },
    { name: "Elena R.", rating: 5, text: "Unbelievable quality. The Palo Santo incense burns cleanly and smells genuinely sacred. My meditation space feels completely reset." },
    { name: "Brother David", rating: 4, text: "The Foundational Wellness Bundle arrived packaged beautifully. Truly premium, high-vibrational herbal mixtures." }
];

// Global calculation pointers for active promotions
let activeDiscountMultiplier = 1.0; 
let currentInventory = JSON.parse(localStorage.getItem('orion_inventory')) || initialProducts;
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || defaultReviews;

function saveInventoryToMemory() { localStorage.setItem('orion_inventory', JSON.stringify(currentInventory)); }
function saveReviewsToMemory() { localStorage.setItem('orion_reviews', JSON.stringify(currentReviews)); }

function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return;
    productGrid.innerHTML = "";

    currentInventory.forEach(product => {
        // Calculate discounted checkout price values on the fly
        const finalPrice = product.myPrice * activeDiscountMultiplier;
        const priceDisplay = activeDiscountMultiplier < 1.0 
            ? `<span style="text-decoration: line-through; color: #999; font-size: 0.95rem; font-weight:400; margin-right: 8px;">$${Number(product.myPrice).toFixed(2)}</span>$${finalPrice.toFixed(2)}`
            : `$${Number(product.myPrice).toFixed(2)}`;

        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p style="font-size: 0.85rem; color: #666; margin-bottom: 12px; line-height: 1.4;">${product.description}</p>
                    <p class="product-price">${priceDisplay}</p>
                    <button class="add-to-cart-btn" onclick="redirectToEmail('${product.name}', ${finalPrice})">Order via Email</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

function redirectToEmail(productName, price) {
    const businessEmail = "orionshealer.shop@gmail.com"; 
    const subject = `New Order Request: ${productName} - Orion's Healer`;
    const emailBody = `Hello Orion's Healer team,\n\nI would like to place an order for the following spiritual wellness product:\n\n✨ PRODUCT DETAILS:\n-----------------------------\nProduct Name: ${productName}\nUnit Price: $${Number(price).toFixed(2)}\n\n📦 MY SHIPPING DETAILS:\n-----------------------------\nFull Name: \nDelivery Address: \nPhone Number: \n\nPlease reply to this email with your manual payment options so I can complete my order.\n\nThank you!`;
    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
}
/* ==========================================
   PROMO COUPON AND COMMUNITY FEEDBACK ENGINE
   ========================================== */
function applyDiscountCoupon() {
    const input = document.getElementById('coupon-input').value.trim().toUpperCase();
    const msg = document.getElementById('coupon-message');
    
    if (input === "SEEKER10") {
        activeDiscountMultiplier = 0.90; // 10% Off
        msg.style.color = "#8c7355";
        msg.innerText = "✨ Success! 'SEEKER10' applied: 10% Off all sanctuary items.";
    } else if (input === "VIP20") {
        activeDiscountMultiplier = 0.80; // 20% Off
        msg.style.color = "#8c7355";
        msg.innerText = "🌟 VIP Clearance Granted! 'VIP20' applied: 20% Off all sanctuary items.";
    } else {
        activeDiscountMultiplier = 1.0;
        msg.style.color = "#cc3333";
        msg.innerText = "❌ Invalid Code. This coupon string has expired or does not exist.";
    }
    // Re-render product prices immediately to display markdown values
    displayHomepageProducts();
}

function displayCommunityReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;
    container.innerHTML = "";

    currentReviews.forEach(rev => {
        let stars = "⭐".repeat(rev.rating);
        const card = `
            <div class="blog-card" style="padding: 20px;">
                <div class="blog-meta">${stars}</div>
                <h4 style="margin-bottom: 8px; color: #333; font-weight:500;">${rev.name}</h4>
                <p style="font-size: 0.9rem; color: #555; line-height: 1.5; margin-bottom: 0;">"${rev.text}"</p>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Hook review submission forms to process instant user updates
const revForm = document.getElementById('review-form');
if (revForm) {
    revForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newReview = {
            name: document.getElementById('rev-user').value,
            rating: parseInt(document.getElementById('rev-rating').value),
            text: document.getElementById('rev-text').value
        };
        currentReviews.unshift(newReview); // Adds new review to top of page list
        saveReviewsToMemory();
        displayCommunityReviews();
        revForm.reset();
        alert("Thank you for sharing your journey! Your feedback is live within our community container.");
    });
}

/* ==========================================
   ADMIN DATABASE CONTROLS & INIT LAYOUTS
   ========================================== */
function displayAdminInventoryTable() {
    const tableBody = document.getElementById('admin-table-body');
    if (!tableBody) return;
    tableBody.innerHTML = "";
    currentInventory.forEach((product) => {
        const row = `
            <tr style="border-bottom: 1px solid #eae6e1;">
                <td style="padding: 10px;"><img src="${product.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 2px;"></td>
                <td style="padding: 10px;"><strong>${product.name}</strong><br><small style="color:#777;">${product.category}</small></td>
                <td style="padding: 10px;">$${Number(product.originalPrice).toFixed(2)}</td>
                <td style="padding: 10px; color: #8c7355; font-weight:600;">$${Number(product.myPrice).toFixed(2)}</td>
                <td style="padding: 10px; text-align: center;">
                    <button onclick="editProductBtnTrigger(${product.id})" style="background:#8c7355; color:white; padding:5px 10px; border:none; margin-right:5px; cursor:pointer; border-radius:2px;">Edit</button>
                    <button onclick="deleteProductBtnTrigger(${product.id})" style="background:#cc3333; color:white; padding:5px 10px; border:none; cursor:pointer; border-radius:2px;">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

const originalPriceInput = document.getElementById('prod-original-price');
if (originalPriceInput) {
    originalPriceInput.addEventListener('input', function() {
        const supplierCost = parseFloat(this.value) || 0;
        document.getElementById('prod-my-price').value = (supplierCost * 3).toFixed(2);
    });
}

const adminForm = document.getElementById('admin-product-form');
if (adminForm) {
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const idField = document.getElementById('product-id').value;
        const name = document.getElementById('prod-name').value;
        const category = document.getElementById('prod-category').value;
        const originalPrice = parseFloat(document.getElementById('prod-original-price').value);
        const myPrice = originalPrice * 3;
        const image = document.getElementById('prod-image').value;
        const description = document.getElementById('prod-desc').value;

        if (idField) {
            const index = currentInventory.findIndex(p => p.id == idField);
            currentInventory[index] = { id: parseInt(idField), name, category, originalPrice, myPrice, image, description };
        } else {
            const newProduct = { id: Date.now(), name, category, originalPrice, myPrice, image, description };
            currentInventory.push(newProduct);
        }
        saveInventoryToMemory();
        adminForm.reset();
        document.getElementById('product-id').value = "";
        document.getElementById('form-title').innerText = "Create New Product Listing";
        document.getElementById('submit-btn').innerText = "Save Product to Inventory";
        document.getElementById('cancel-edit-btn').classList.add('hidden');
        displayAdminInventoryTable();
        alert("Inventory list updated smoothly!");
    });
}

function editProductBtnTrigger(id) {
    const product = currentInventory.find(p => p.id === id);
    if (!product) return;
    document.getElementById('product-id').value = product.id;
    document.getElementById('prod-name').value = product.name;
    document.getElementById('prod-category').value = product.category;
    document.getElementById('prod-original-price').value = product.originalPrice;
    document.getElementById('prod-my-price').value = product.myPrice;
    document.getElementById('prod-image').value = product.image;
    document.getElementById('prod-desc').value = product.description;
    document.getElementById('form-title').innerText = "Modify Existing Product Listing";
    document.getElementById('submit-btn').innerText = "Apply Database Changes";
    document.getElementById('cancel-edit-btn').classList.remove('hidden');
}

function deleteProductBtnTrigger(id) {
    if (confirm("Permanently delete this product listing from your storefront?")) {
        currentInventory = currentInventory.filter(p => p.id !== id);
        saveInventoryToMemory();
        displayAdminInventoryTable();
    }
}

window.onload = function() {
    displayHomepageProducts();
    displayAdminInventoryTable();
    displayCommunityReviews();
    
    const loggedUser = JSON.parse(localStorage.getItem('orion_user'));
    const authNav = document.getElementById('nav-auth-btn');
    if (loggedUser && authNav) { authNav.innerText = `Peace, ${loggedUser.name.split(' ')}`; }
};

function switchAuthMode(mode) {
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');
    if (!loginBox || !registerBox) return;
    if (mode === 'register') { loginBox.classList.add('hidden'); registerBox.classList.remove('hidden'); } 
    else { registerBox.classList.add('hidden'); loginBox.classList.remove('hidden'); }
}

const regForm = document.getElementById('register-form');
if (regForm) {
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const userData = {
            name: document.getElementById('reg-name').value,
            email: document.getElementById('reg-email').value,
            phone: document.getElementById('reg-phone').value,
            goal: document.getElementById('reg-goal').value
        };
        localStorage.setItem('orion_user', JSON.stringify(userData));
        alert(`Welcome to our circle, ${userData.name}! VIP Account Enabled.`);
        const authNav = document.getElementById('nav-auth-btn');
        if (authNav) authNav.innerText = `Peace, ${userData.name.split(' ')}`;
        switchAuthMode('login');
    });
}

function recoverPassword() {
    const email = prompt("Enter your registered email address:");
    if (email) alert(`A validation link has been sent to: ${email}`);
}
