// Master Database Layer with Inline Embedded Visual Vectors (100% Block Proof)
const initialProducts = [
    {
        id: 1,
        name: "Butterfly Pea Tea",
        myPrice: 45.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%232b70c9' stroke-width='1'><circle cx='12' cy='12' r='10'/><path d='M12 8v8M8 12h8'/></svg>",
        category: "Teas",
        description: "Vibrant premium sun-dried blue flower petals designed to boost memory and clear internal channels."
    },
    {
        id: 2,
        name: "Irish Sea Moss (Raw)",
        myPrice: 60.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%238c7355' stroke-width='1'><path d='M12 2L2 22h20L12 2z'/></svg>",
        category: "Supplements",
        description: "Organic wildcrafted gold ocean vegetation packed with essential cellular micronutrients."
    },
    {
        id: 3,
        name: "Organic Blue Lotus",
        myPrice: 75.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%232b70c9' stroke-width='1'><circle cx='12' cy='12' r='10'/><path d='M12 8v8M8 12h8'/></svg>",
        category: "Herbs",
        description: "Sustainably harvested Egyptian Blue Lotus petals to induce somatic calm and support deep meditation."
    },
    {
        id: 4,
        name: "Soursop Leaves (Dried)",
        myPrice: 60.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%238c7355' stroke-width='1'><path d='M12 2L2 22h20L12 2z'/></svg>",
        category: "Herbs",
        description: "Hand-selected premium soursop leaves optimized for clearing toxicities from the blood."
    },
    {
        id: 5,
        name: "Sea Moss Bulk 5 lb Bag",
        myPrice: 300.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%238c7355' stroke-width='1'><rect x='3' y='3' width='18' height='18' rx='2'/></svg>",
        category: "Supplements",
        description: "Master wholesale supply bag of gold raw Irish moss for long-term health sanctuary tracking."
    },
    {
        id: 6,
        name: "Giraffe Sculpture",
        myPrice: 30.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23111111' stroke-width='1'><rect x='3' y='3' width='18' height='18' rx='2'/></svg>",
        category: "Miscellaneous",
        description: "Hand-carved premium wooden giraffe sculpture artifact to anchor grounding earth energies in your space."
    },
    {
        id: 7,
        name: "African Art Sanctuary Mask",
        myPrice: 1200.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23111111' stroke-width='1'><rect x='3' y='3' width='18' height='18' rx='2'/></svg>",
        category: "Miscellaneous",
        description: "Authentic, high-vibrational hand-detailed traditional protective ancestral ritual mask sculpture."
    },
    {
        id: 8,
        name: "Premium Ankh Leather Bag",
        myPrice: 285.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23111111' stroke-width='1'><rect x='3' y='3' width='18' height='18' rx='2'/></svg>",
        category: "Miscellaneous",
        description: "Hand-crafted custom leather messenger tracking setup featuring the sacred Egyptian key of life emblem."
    },
    {
        id: 9,
        name: "Pure Premium Manuka Honey",
        myPrice: 45.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%238c7355' stroke-width='1'><path d='M12 2L2 22h20L12 2z'/></svg>",
        category: "Supplements",
        description: "High-potency organic medicinal manuka honey compound for profound gut realignments and immunity."
    },
    {
        id: 10,
        name: "Sacred Rose Water Distillate",
        myPrice: 15.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%232b70c9' stroke-width='1'><circle cx='12' cy='12' r='10'/></svg>",
        category: "Personal Care",
        description: "Pure steam-distilled organic rose water fluid to clear skin properties and elevate mood attributes."
    },
    {
        id: 11,
        name: "Fit & Flat Belly Tonic",
        myPrice: 120.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%238c7355' stroke-width='1.5'><path d='M6 3h12v3H6zm2 3h8v13a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z'/><circle cx='12' cy='13' r='3'/></svg>",
        category: "Tonics",
        description: "A premium organic botanical fluid matrix engineered to cleanse the digestive track and balance core energy fields." [IMAGE_CONTEXT]
    },
    {
        id: 12,
        name: "Brain & Heart Balance Tonic",
        myPrice: 120.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%23cc3333' stroke-width='1.5'><path d='M6 3h12v3H6zm2 3h8v13a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z'/><circle cx='12' cy='13' r='3'/></svg>",
        category: "Tonics",
        description: "A high-vibrational cellular extraction designed to support memory retention, sharpen focus, and fortify heart properties."
    },
    {
        id: 13,
        name: "Lungs & Liver Cleansing Tonic",
        myPrice: 120.00,
        image: "data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 24 24' fill='none' stroke='%232b70c9' stroke-width='1.5'><path d='M6 3h12v3H6zm2 3h8v13a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z'/><circle cx='12' cy='13' r='3'/></svg>",
        category: "Tonics",
        description: "Deep organic fluid compound formulated to flush metabolic toxicities and expand respiratory baseline capacities."
    }
];

const defaultReviews = [
    { name: "Malik K.", rating: 5, text: "The Fit & Flat Belly tonic has completely optimized my gut tracking within a single week." },
    { name: "Elena R.", rating: 5, text: "Excellent execution format on the ordering system. Highly secure and fast response metrics." }
];

let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let currentInventory = JSON.parse(localStorage.getItem('orion_inventory')) || initialProducts;
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || defaultReviews;

function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return; productGrid.innerHTML = "";

    const itemsToDisplay = currentCategoryFilter === "All" 
        ? currentInventory 
        : currentInventory.filter(p => p.category.toLowerCase() === currentCategoryFilter.toLowerCase());

    if (itemsToDisplay.length === 0) {
        productGrid.innerHTML = `<p style="grid-column: 1/-1; padding: 40px; text-align:center; color:#999;">No items currently listed under this tier configuration.</p>`;
        return;
    }

    itemsToDisplay.forEach(product => {
        const finalPrice = product.myPrice * activeDiscountMultiplier;
        const priceDisplay = activeDiscountMultiplier < 1.0 
            ? `<span style="text-decoration: line-through; color: #999; font-size: 0.85rem; font-weight:400; margin-right: 8px;">$${Number(product.myPrice).toFixed(2)}</span>$${finalPrice.toFixed(2)}`
            : `$${Number(product.myPrice).toFixed(2)}`;

        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" style="background:#fafafa; border-radius:4px; padding:10px;">
                <h3 class="product-title"><strong>${product.name}</strong></h3>
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
        document.getElementById('nav-auth-btn').innerText = `Peace, ${data.name.split(' ')}`;
        switchAuthMode('login');
    });
}

window.onload = function() {
    // Clear out any old web link cache blocks completely
    localStorage.removeItem('orion_inventory');
    currentInventory = initialProducts;
    
    displayHomepageProducts(); displayCommunityReviews();
    const u = JSON.parse(localStorage.getItem('orion_user'));
    if (u) document.getElementById('nav-auth-btn').innerText = `Peace, ${u.name.split(' ')}`;
};
