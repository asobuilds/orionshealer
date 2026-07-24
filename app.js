// 1. Replicating Reference Image Products with 3x Price Calculation Multipliers applied
const initialProducts = [
    {
        id: 1,
        name: "The Advanced Wellness Bundle",
        originalPrice: 170.00,
        myPrice: 510.00, // 170.00 * 3
        image: "https://unsplash.com",
        category: "Bundles",
        description: "Complete strategic multi-bottle premium systemic internal wellness preparation setup tracker."
    },
    {
        id: 2,
        name: "Irish Sea Moss (Raw Blend)",
        originalPrice: 20.00,
        myPrice: 60.00, // 20.00 * 3
        image: "https://unsplash.com",
        category: "Supplements",
        description: "Premium sun-dried cell food compound containing high minerals."
    },
    {
        id: 3,
        name: "Soursop 7 Archangels Tonic",
        originalPrice: 40.00,
        myPrice: 120.00, // 40.00 * 3
        image: "https://unsplash.com",
        category: "Supplements",
        description: "Potent deep fluid extract designed for organic protection."
    }
];

const defaultReviews = [
    { name: "Malik K.", rating: 5, text: "The Advanced Wellness Bundle completely transformed my baseline focus thresholds." },
    { name: "Elena R.", rating: 5, text: "Authentic, raw herbs. Fast execution tracking via email updates." }
];

let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let currentInventory = JSON.parse(localStorage.getItem('orion_inventory')) || initialProducts;
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || defaultReviews;

function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return;
    productGrid.innerHTML = "";

    const itemsToDisplay = currentCategoryFilter === "All" 
        ? currentInventory 
        : currentInventory.filter(p => p.category === currentCategoryFilter);

    if (itemsToDisplay.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; padding: 20px; text-align:center; color:#999;">No items currently listed under this tier configuration.</p>`;
        return;
    }

    itemsToDisplay.forEach(product => {
        const finalPrice = product.myPrice * activeDiscountMultiplier;
        const priceDisplay = activeDiscountMultiplier < 1.0 
            ? `<span style="text-decoration: line-through; color: #999; font-size: 0.85rem; font-weight:400; margin-right: 8px;">$${Number(product.myPrice).toFixed(2)}</span>$${finalPrice.toFixed(2)}`
            : `$${Number(product.myPrice).toFixed(2)}`;

        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h3 class="product-title"><strong>${product.name}</strong></h3>
                <p class="product-price">${priceDisplay}</p>
                <button class="add-to-cart-btn" onclick="redirectToEmail('${product.name}', ${finalPrice})">Order via Email</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

function filterCategory(categoryName) {
    currentCategoryFilter = categoryName;
    const links = document.querySelectorAll('.sidebar-cat-link');
    links.forEach(link => {
        if (link.innerText.toLowerCase() === categoryName.toLowerCase() || (categoryName === "All" && link.innerText.includes("All"))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    displayHomepageProducts();
}
function redirectToEmail(productName, price) {
    const businessEmail = "orionshealer.shop@gmail.com"; 
    const subject = `New Order Request: ${productName} - Orion's Healer`;
    const emailBody = `Hello Orion's Healer,\n\nI want to place an order for:\nProduct: ${productName}\nPrice: $${Number(price).toFixed(2)}\n\n📦 MY DETAILS:\nFull Name:\nDelivery Address:\nPhone Number:\n\nPlease send manual invoice payment processing routing metrics so I can complete this purchase.`;
    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
}

function applyDiscountCoupon() {
    const input = document.getElementById('coupon-input').value.trim().toUpperCase();
    const msg = document.getElementById('coupon-message');
    if (input === "SEEKER10") {
        activeDiscountMultiplier = 0.90;
        msg.style.color = "green"; msg.innerText = "10% Coupon code applied successfully.";
    } else {
        activeDiscountMultiplier = 1.0;
        msg.style.color = "red"; msg.innerText = "Invalid verification token validation string.";
    }
    displayHomepageProducts();
}

function displayCommunityReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return; container.innerHTML = "";
    currentReviews.forEach(rev => {
        container.innerHTML += `<div style="border-bottom:1px solid #eee; padding:10px 0;"><small><strong>${rev.name}</strong> (${"⭐".repeat(rev.rating)})</small><p style="font-size:0.9rem; color:#555;">"${rev.text}"</p></div>`;
    });
}

const revForm = document.getElementById('review-form');
if (revForm) {
    revForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newReview = { name: document.getElementById('rev-user').value, rating: parseInt(document.getElementById('rev-rating').value), text: document.getElementById('rev-text').value };
        currentReviews.unshift(newReview);
        localStorage.setItem('orion_reviews', JSON.stringify(currentReviews));
        displayCommunityReviews(); revForm.reset(); alert("Feedback saved!");
    });
}

function switchAuthMode(mode) {
    const l = document.getElementById('login-box'); const r = document.getElementById('register-box');
    if (mode === 'register') { l.classList.add('hidden'); r.classList.remove('hidden'); } else { r.classList.add('hidden'); l.classList.remove('hidden'); }
}

const regForm = document.getElementById('register-form');
if (regForm) {
    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = { name: document.getElementById('reg-name').value };
        localStorage.setItem('orion_user', JSON.stringify(data));
        alert("Account processing initialized!");
        document.getElementById('nav-auth-btn').innerText = `Peace, ${data.name.split(' ')[0]}`;
        switchAuthMode('login');
    });
}

window.onload = function() {
    displayHomepageProducts(); displayCommunityReviews();
    const u = JSON.parse(localStorage.getItem('orion_user'));
    if (u) document.getElementById('nav-auth-btn').innerText = `Peace, ${u.name.split(' ')[0]}`;
};
