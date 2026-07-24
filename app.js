// 1. Master Product Database Layer Featuring All 14 Items 
const initialProducts = [
    {
        id: 1,
        name: "Butterfly Pea Tea",
        myPrice: 45.00,
        visualStyle: "background: linear-gradient(135deg, #1e3c72, #2a5298); border-top: 8px solid #00d2ff;",
        visualLabel: "🦋 TEA BAG",
        category: "Teas",
        description: "Vibrant premium sun-dried blue flower petals designed to boost memory and clear internal channels."
    },
    {
        id: 2,
        name: "Irish Sea Moss (Raw Bag)",
        myPrice: 60.00,
        visualStyle: "background: linear-gradient(135deg, #f5f7fa, #c3cfe2); border-top: 8px solid #8c7355;",
        visualLabel: "🌿 RAW MOSS",
        category: "Supplements",
        description: "Organic wildcrafted gold ocean vegetation packed with essential cellular micronutrients."
    },
    {
        id: 3,
        name: "Organic Blue Lotus",
        myPrice: 75.00,
        visualStyle: "background: linear-gradient(135deg, #6a11cb, #2575fc); border-top: 8px solid #e0c3fc;",
        visualLabel: "🔮 BLUE LOTUS",
        category: "Herbs",
        description: "Sustainably harvested Egyptian Blue Lotus petals to induce somatic calm and support deep meditation."
    },
    {
        id: 4,
        name: "Soursop Leaves (Dried Pouch)",
        myPrice: 60.00,
        visualStyle: "background: linear-gradient(135deg, #134e5e, #71b280); border-top: 8px solid #a8ff78;",
        visualLabel: "🍃 SOURSOP",
        category: "Herbs",
        description: "Hand-selected premium soursop leaves optimized for clearing toxicities from the blood."
    },
    {
        id: 5,
        name: "Elderberries Whole Pouch",
        myPrice: 75.00,
        visualStyle: "background: linear-gradient(135deg, #2c3e50, #3498db); border-top: 8px solid #9b59b6;",
        visualLabel: "🍇 ELDERBERRY",
        category: "Herbs",
        description: "Pure whole elderberries providing structural immune support and natural seasonal protection."
    },
    {
        id: 6,
        name: "Sea Moss Bulk 5 lb Bag",
        myPrice: 300.00,
        visualStyle: "background: linear-gradient(135deg, #e65c00, #F9D423); border-top: 8px solid #d35400;",
        visualLabel: "📦 5LB BULK",
        category: "Supplements",
        description: "Master wholesale supply bag of gold raw Irish moss for long-term health sanctuary tracking."
    },
    {
        id: 7,
        name: "Hand-Carved Giraffe Sculpture",
        myPrice: 30.00,
        visualStyle: "background: linear-gradient(135deg, #4d3319, #805333); border-top: 8px solid #ffd1a3;",
        visualLabel: "🦒 ARTIFACT",
        category: "Miscellaneous",
        description: "Hand-carved premium wooden giraffe sculpture artifact to anchor grounding earth energies in your space."
    },
    {
        id: 8,
        name: "African Art Sanctuary Mask",
        myPrice: 1200.00,
        visualStyle: "background: linear-gradient(135deg, #141414, #282828); border-top: 8px solid #8c7355;",
        visualLabel: "🎭 RITUAL MASK",
        category: "Miscellaneous",
        description: "Authentic, high-vibrational hand-detailed traditional protective ancestral ritual mask sculpture."
    }
];

const remainingProducts = [
    {
        id: 9,
        name: "Premium Ankh Leather Bag",
        myPrice: 285.00,
        visualStyle: "background: linear-gradient(135deg, #3d2314, #5c3a21); border-top: 8px solid #d4af37;",
        visualLabel: "🧳 ANKH BAG",
        category: "Miscellaneous",
        description: "Hand-crafted custom leather messenger setup featuring the sacred Egyptian key of life emblem."
    },
    {
        id: 10,
        name: "Pure Premium Manuka Honey",
        myPrice: 45.00,
        visualStyle: "background: linear-gradient(135deg, #f12711, #f5af19); border-top: 8px solid #fff;",
        visualLabel: "🍯 HONEY JAR",
        category: "Supplements",
        description: "High-potency organic medicinal manuka honey compound for profound gut realignments and immunity."
    },
    {
        id: 11,
        name: "Sacred Rose Water Distillate",
        myPrice: 15.00,
        visualStyle: "background: linear-gradient(135deg, #ffafbd, #ffc3a0); border-top: 8px solid #e91e63;",
        visualLabel: "🌹 ROSE WATER",
        category: "Personal Care",
        description: "Pure steam-distilled organic rose water fluid to clear skin properties and elevate mood attributes."
    },
    {
        id: 12,
        name: "Fit & Flat Belly Tonic",
        myPrice: 120.00,
        visualStyle: "background: linear-gradient(135deg, #56ab2f, #a8ff78); border-top: 8px solid #388e3c;",
        visualLabel: "🧪 BELLY TONIC",
        category: "Tonics",
        description: "A premium organic biological liquid fluid engineered to support digestive realignments and clear core tracts."
    },
    {
        id: 13,
        name: "Brain & Heart Balance Tonic",
        myPrice: 120.00,
        visualStyle: "background: linear-gradient(135deg, #ff416c, #ff4b2b); border-top: 8px solid #d32f2f;",
        visualLabel: "🧪 BRAIN TONIC",
        category: "Tonics",
        description: "A high-vibrational cellular extraction designed to enhance memory retention and stabilize arterial fields."
    },
    {
        id: 14,
        name: "Lungs & Liver Cleansing Tonic",
        myPrice: 120.00,
        visualStyle: "background: linear-gradient(135deg, #00c6ff, #0072ff); border-top: 8px solid #0097a7;",
        visualLabel: "🧪 LUNG TONIC",
        category: "Tonics",
        description: "Deep organic fluid compound formulated to flush metabolic toxicities and expand respiratory capacities."
    }
];

// Shopping Cart Array Track Storage
let activeCart = [];
let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let currentInventory = initialProducts.concat(remainingProducts);
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || [
    { name: "Malik K.", rating: 5, text: "Bundling multiple tonics inside the new shopping basket interface works seamlessly!" }
];

function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return; productGrid.innerHTML = "";

    const itemsToDisplay = currentCategoryFilter === "All" 
        ? currentInventory 
        : currentInventory.filter(p => p.category.toLowerCase() === currentCategoryFilter.toLowerCase());

    itemsToDisplay.forEach(product => {
        const finalPrice = product.myPrice * activeDiscountMultiplier;
        const priceDisplay = activeDiscountMultiplier < 1.0 
            ? "<span style='text-decoration: line-through; color: #999; font-size: 0.85rem; font-weight:400; margin-right: 8px;'>$" + Number(product.myPrice).toFixed(2) + "</span>$" + finalPrice.toFixed(2)
            : "$" + Number(product.myPrice).toFixed(2);

        const productCard = `
            <div class="product-card">
                <div class="product-render-box" style="${product.visualStyle || 'background:#ccc;'}">
                    ${product.visualLabel || 'Vessel'}
                </div>
                <h3 class="product-title"><strong>${product.name}</strong></h3>
                <p style="font-size: 0.8rem; color: #777; margin-bottom: 10px; line-height:1.3; min-height:42px;">${product.description}</p>
                <p class="product-price">${priceDisplay}</p>
                <button class="add-to-cart-btn" onclick="addItemToBasket(${product.id})">Add to Basket</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}
/* ==========================================
   DYNAMIC MULTI-ITEM SHOPPING CART ENGINE
   ========================================== */
function toggleCartDrawer(isOpen) {
    const drawer = document.getElementById('cart-drawer');
    if (!drawer) return;
    if (isOpen) {
        drawer.classList.remove('hidden');
    } else {
        drawer.classList.add('hidden');
    }
}

function addItemToBasket(productId) {
    const product = currentInventory.find(p => p.id === productId);
    if (!product) return;

    // Check if the item is already sitting inside your cart basket array
    const existingItem = activeCart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        activeCart.push({
            id: product.id,
            name: product.name,
            price: product.myPrice * activeDiscountMultiplier,
            quantity: 1
        });
    }

    updateCartInterfaceTotals();
    alert(product.name + " added to your sacred basket! Click the cart icon at the header to view.");
}

function removeItemFromBasket(productId) {
    activeCart = activeCart.filter(item => item.id !== productId);
    updateCartInterfaceTotals();
}

function updateCartInterfaceTotals() {
    let totalItems = 0;
    let totalPrice = 0;
    const itemsListContainer = document.getElementById('cart-items-list');

    if (!itemsListContainer) return;
    itemsListContainer.innerHTML = "";

    if (activeCart.length === 0) {
        itemsListContainer.innerHTML = "<p style='text-align: center; color: #999; margin-top: 40px;'>Your basket is currently empty.</p>";
    } else {
        activeCart.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;

            const itemRow = `
                <div class="cart-item-row">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <small style="color:#777;">$${item.price.toFixed(2)} x ${item.quantity}</small>
                    </div>
                    <button onclick="removeItemFromBasket(${item.id})" style="background:none; border:none; color:#cc3333; cursor:pointer; font-size:0.85rem; text-decoration:underline;">Remove</button>
                </div>
            `;
            itemsListContainer.innerHTML += itemRow;
        });
    }

    // Refresh navigation counts and header total tracking displays
    document.getElementById('nav-cart-count').innerText = totalItems + " items";
    document.getElementById('nav-cart-total').innerText = "$" + totalPrice.toFixed(2);
    document.getElementById('cart-drawer-subtotal').innerText = "$" + totalPrice.toFixed(2);
}

function checkoutEntireCartViaEmail() {
    if (activeCart.length === 0) {
        alert("Your shopping basket is currently empty! Add items before running verification checkout scripts.");
        return;
    }

    const businessEmail = "orionshealer.shop@gmail.com";
    const subject = "New Bulk Multi-Item Order Request - Orion's Healer";

    // Format a beautifully clean structured invoice containing every checked out element line item loop
    let invoiceBody = "Hello Orion's Healer Sanctuary Team,\n\nI want to place an order for the following list of spiritual wellness items:\n\n✨ SACRED BASKET INVOICE:\n----------------------------------------\n";
    let calculatedGrandTotal = 0;

    activeCart.forEach((item, index) => {
        let rowTotal = item.price * item.quantity;
        calculatedGrandTotal += rowTotal;
        invoiceBody += (index + 1) + ". " + item.name + " [Qty: " + item.quantity + "] - $" + rowTotal.toFixed(2) + "\n";
    });

    invoiceBody += "----------------------------------------\n";
    invoiceBody += "🛒 GRAND TOTAL RETREIVAL VALUATION: $" + calculatedGrandTotal.toFixed(2) + "\n\n";
    invoiceBody += "📦 MY SHIPPING ATTRIBUTES:\n----------------------------------------\nFull Name:\nDelivery Address:\nPhone/WhatsApp Number:\n\nPlease process this manual invoice transmission block and reply with routing metrics so I can settle payment.\n\nThank you!";

    window.location.href = "mailto:" + businessEmail + "?subject=" + encodeURIComponent(subject) + "&body= " + encodeURIComponent(invoiceBody);
}

/* ==========================================
   UTILITY FILTER CONTROLLERS & HOOKS
   ========================================== */
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

function applyDiscountCoupon() {
    const input = document.getElementById('coupon-input').value.trim().toUpperCase();
    const msg = document.getElementById('coupon-message');
    if (input === "SEEKER10") {
        activeDiscountMultiplier = 0.90;
        msg.style.color = "green"; msg.innerText = "10% Coupon code applied successfully.";
    } else {
        activeDiscountMultiplier = 1.0;
        msg.style.color = "red"; msg.innerText = "Invalid verification coupon code configuration.";
    }
    // Update basket costs in real-time if a code is validated mid-session
    activeCart.forEach(item => {
        const matchingProduct = currentInventory.find(p => p.id === item.id);
        if (matchingProduct) item.price = matchingProduct.myPrice * activeDiscountMultiplier;
    });
    displayHomepageProducts();
    updateCartInterfaceTotals();
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

window.onload = function() {
    localStorage.removeItem('orion_inventory');
    displayHomepageProducts(); displayCommunityReviews(); updateCartInterfaceTotals();
};
