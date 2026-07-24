// 1. Unified Master Inventory Database with 100% Firewall-Safe Rich Full-Color Inline Vector Layouts
const initialProducts = [
    {
        id: 1,
        name: "Afrikan Woman Original Angel Book",
        myPrice: 44.85,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%23673ab7'><path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm0-4H9V5h10v2z'/></svg>",
        category: "Books",
        description: "An deep historical validation text exploring archetypal ancestral lineage parameters."
    },
    {
        id: 2,
        name: "The Goddess Blackwoman Book",
        myPrice: 38.85,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%23e91e63'><path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm0-4H9V5h10v2z'/></svg>",
        category: "Books",
        description: "12 detailed foundational structural lessons mapped to restore historical identity configurations."
    },
    {
        id: 3,
        name: "Fit & Flat Belly Tonic",
        myPrice: 120.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%234caf50'><path d='M6 2h12v3H6zm11 4H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/></svg>",
        category: "Tonics",
        description: "A premium organic botanical fluid matrix engineered to cleanse the digestive track and balance core energy fields."
    },
    {
        id: 4,
        name: "Brain & Heart Balance Tonic",
        myPrice: 120.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%23ff5722'><path d='M6 2h12v3H6zm11 4H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/></svg>",
        category: "Tonics",
        description: "A high-vibrational cellular extraction designed to support memory retention, sharpen focus, and fortify heart properties."
    },
    {
        id: 5,
        name: "Lungs & Liver Cleansing Tonic",
        myPrice: 120.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%2300bcd4'><path d='M6 2h12v3H6zm11 4H7c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z'/></svg>",
        category: "Tonics",
        description: "Deep organic fluid compound formulated to flush metabolic toxicities and expand respiratory baseline capacities."
    },
    {
        id: 6,
        name: "Butterfly Pea Tea",
        myPrice: 45.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%232196f3'><path d='M2 21h18v-2H2v2zM20 8h-2V5h2v3zm-4-3v3H4v11h12V5h4c1.1 0 2-.9 2-2V1c0-1.1-.9-2-2-2H2C.9-1 0-.1 0 1v17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-2V5z'/></svg>",
        category: "Teas",
        description: "Vibrant premium sun-dried blue flower petals designed to boost memory and clear internal channels."
    },
    {
        id: 7,
        name: "Irish Sea Moss",
        myPrice: 60.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%23ffc107'><path d='M12 3l10 18H2L12 3z'/></svg>",
        category: "Supplements",
        description: "Organic wildcrafted gold ocean vegetation packed with essential cellular micronutrients."
    },
    {
        id: 8,
        name: "Organic Blue Lotus",
        myPrice: 75.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='150' height='180' viewBox='0 0 24 24' fill='%239c27b0'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/></svg>",
        category: "Herbs",
        description: "Sustainably harvested Egyptian Blue Lotus petals to induce somatic calm and support deep meditation."
    }
];

let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let currentInventory = JSON.parse(localStorage.getItem('orion_inventory')) || initialProducts;
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || [
    { name: "Malik K.", rating: 5, text: "The historical literature bundle is unmatched structural excellence." }
];

function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return; productGrid.innerHTML = "";

    const itemsToDisplay = currentCategoryFilter === "All" 
        ? currentInventory 
        : currentInventory.filter(p => p.category.toLowerCase() === currentCategoryFilter.toLowerCase());

    if (itemsToDisplay.length === 0) {
        productGrid.innerHTML = "<p style='grid-column: 1/-1; padding: 40px; text-align:center; color:#999;'>No items currently listed under this tier configuration.</p>";
        return;
    }

    itemsToDisplay.forEach(product => {
        const finalPrice = product.myPrice * activeDiscountMultiplier;
        const priceDisplay = activeDiscountMultiplier < 1.0 
            ? "<span style='text-decoration: line-through; color: #999; font-size: 0.85rem; font-weight:400; margin-right: 8px;'>$" + Number(product.myPrice).toFixed(2) + "</span>$" + finalPrice.toFixed(2)
            : "$" + Number(product.myPrice).toFixed(2);

        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" style="background:#fcfbfa; max-height:160px; padding:5px;">
                <h3 class="product-title" style="margin-top:10px;"><strong>${product.name}</strong></h3>
                <p style="font-size: 0.8rem; color: #777; margin-bottom: 10px; line-height:1.3;">${product.description}</p>
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
    const subject = "New Order Request: " + productName + " - Orion's Healer";
    const emailBody = "Hello Orion's Healer,\n\nI want to place an order for:\nProduct: " + productName + "\nPrice: $" + Number(price).toFixed(2) + "\n\n📦 MY DETAILS:\nFull Name:\nDelivery Address:\nPhone Number:\n\nPlease send manual invoice payment processing routing metrics so I can complete this purchase.";
    window.location.href = "mailto:" + businessEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
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
        container.innerHTML += "<div style='border-bottom:1px solid #eee; padding:10px 0;'><small><strong>" + rev.name + "</strong> (" + "★".repeat(rev.rating) + ")</small><p style='font-size:0.9rem; color:#555;'>\"" + rev.text + "\"</p></div>";
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
        document.getElementById('nav-auth-btn').innerText = "Peace, " + data.name.split(' ');
        switchAuthMode('login');
    });
}

window.onload = function() {
    // Clear old data cache blocks to force vector graphics generation loop
    localStorage.removeItem('orion_inventory');
    currentInventory = initialProducts;
    
    displayHomepageProducts(); displayCommunityReviews();
    const u = JSON.parse(localStorage.getItem('orion_user'));
    if (u) document.getElementById('nav-auth-btn').innerText = "Peace, " + u.name.split(' ');
};
