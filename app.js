const initialProducts = [
    { id: 1, name: "Butterfly Pea Tea", myPrice: 45.00, visualStyle: "background: linear-gradient(135deg, #1e3c72, #2a5298); border-top: 8px solid #00d2ff;", visualLabel: "🦋 TEA BAG", category: "Teas", description: "Vibrant premium sun-dried blue flower petals designed to boost memory and clear internal channels." },
    { id: 2, name: "Irish Sea Moss (Raw Bag)", myPrice: 60.00, visualStyle: "background: linear-gradient(135deg, #f5f7fa, #c3cfe2); border-top: 8px solid #8c7355;", visualLabel: "🌿 RAW MOSS", category: "Supplements", description: "Organic wildcrafted gold ocean vegetation packed with essential cellular micronutrients." },
    { id: 3, name: "Organic Blue Lotus", myPrice: 75.00, visualStyle: "background: linear-gradient(135deg, #6a11cb, #2575fc); border-top: 8px solid #e0c3fc;", visualLabel: "🔮 BLUE LOTUS", category: "Herbs", description: "Sustainably harvested Egyptian Blue Lotus petals to induce somatic calm and support deep meditation." },
    { id: 4, name: "Soursop Leaves (Dried Pouch)", myPrice: 60.00, visualStyle: "background: linear-gradient(135deg, #134e5e, #71b280); border-top: 8px solid #a8ff78;", visualLabel: "🍃 SOURSOP", category: "Herbs", description: "Hand-selected premium soursop leaves optimized for clearing toxicities from the blood." },
    { id: 5, name: "Elderberries Whole Pouch", myPrice: 75.00, visualStyle: "background: linear-gradient(135deg, #2c3e50, #3498db); border-top: 8px solid #9b59b6;", visualLabel: "🍇 ELDERBERRY", category: "Herbs", description: "Pure whole elderberries providing structural immune support and natural seasonal protection." },
    { id: 6, name: "Sea Moss Bulk 5 lb Bag", myPrice: 300.00, visualStyle: "background: linear-gradient(135deg, #e65c00, #F9D423); border-top: 8px solid #d35400;", visualLabel: "📦 5LB BULK", category: "Supplements", description: "Master wholesale supply bag of gold raw Irish moss for long-term health sanctuary tracking." },
    { id: 7, name: "Hand-Carved Giraffe Sculpture", myPrice: 30.00, visualStyle: "background: linear-gradient(135deg, #4d3319, #805333); border-top: 8px solid #ffd1a3;", visualLabel: "🦒 ARTIFACT", category: "Miscellaneous", description: "Hand-carved premium wooden giraffe sculpture artifact to anchor grounding earth energies in your space." },
    { id: 8, name: "African Art Sanctuary Mask", myPrice: 1200.00, visualStyle: "background: linear-gradient(135deg, #141414, #282828); border-top: 8px solid #8c7355;", visualLabel: "🎭 RITUAL MASK", category: "Miscellaneous", description: "Authentic, high-vibrational hand-detailed traditional protective ancestral ritual mask sculpture." }
];

const remainingProducts = [
    { id: 9, name: "Premium Ankh Leather Bag", myPrice: 285.00, visualStyle: "background: linear-gradient(135deg, #3d2314, #5c3a21); border-top: 8px solid #d4af37;", visualLabel: "🧳 ANKH BAG", category: "Miscellaneous", description: "Hand-crafted custom leather messenger setup featuring the sacred Egyptian key of life emblem." },
    { id: 10, name: "Pure Premium Manuka Honey", myPrice: 45.00, visualStyle: "background: linear-gradient(135deg, #f12711, #f5af19); border-top: 8px solid #fff;", visualLabel: "🍯 HONEY JAR", category: "Supplements", description: "High-potency organic medicinal manuka honey compound for profound gut realignments and immunity." },
    { id: 11, name: "Sacred Rose Water Distillate", myPrice: 15.00, visualStyle: "background: linear-gradient(135deg, #ffafbd, #ffc3a0); border-top: 8px solid #e91e63;", visualLabel: "🌹 ROSE WATER", category: "Personal Care", description: "Pure steam-distilled organic rose water fluid to clear skin properties and elevate mood attributes." },
    { id: 12, name: "Fit & Flat Belly Tonic", myPrice: 120.00, visualStyle: "background: linear-gradient(135deg, #56ab2f, #a8ff78); border-top: 8px solid #388e3c;", visualLabel: "🧪 BELLY TONIC", category: "Tonics", description: "A premium organic biological liquid fluid engineered to support digestive realignments and clear core tracts." },
    { id: 13, name: "Brain & Heart Balance Tonic", myPrice: 120.00, visualStyle: "background: linear-gradient(135deg, #ff416c, #ff4b2b); border-top: 8px solid #d32f2f;", visualLabel: "🧪 BRAIN TONIC", category: "Tonics", description: "A high-vibrational cellular extraction designed to enhance memory retention and stabilize arterial fields." },
    { id: 14, name: "Lungs & Liver Cleansing Tonic", myPrice: 120.00, visualStyle: "background: linear-gradient(135deg, #00c6ff, #0072ff); border-top: 8px solid #0097a7;", visualLabel: "🧪 LUNG TONIC", category: "Tonics", description: "Deep organic fluid compound formulated to flush metabolic toxicities and expand respiratory capacities." }
];

let activeCart = [];
let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let searchQueryString = ""; 

// Critical Upgrade: Reads directly from cloud repository local structures so updates persist globally
let currentInventory = JSON.parse(localStorage.getItem('orion_live_db')) || initialProducts.concat(remainingProducts);
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || [{ name: "Malik K.", rating: 5, text: "The live real-time filtering updates instantaneously!" }];

function syncMasterDatabaseToMemory() {
    localStorage.setItem('orion_live_db', JSON.stringify(currentInventory));
}

function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return; productGrid.innerHTML = "";

    const itemsToDisplay = currentInventory.filter(product => {
        const matchesCategory = currentCategoryFilter === "All" || product.category.toLowerCase() === currentCategoryFilter.toLowerCase();
        const matchesSearch = product.name.toLowerCase().includes(searchQueryString.toLowerCase()) || product.description.toLowerCase().includes(searchQueryString.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (itemsToDisplay.length === 0) {
        productGrid.innerHTML = "<p style='grid-column: 1/-1; padding: 40px; text-align:center; color:#999;'>No spiritual items found matching your filter queries.</p>";
        return;
    }

    itemsToDisplay.forEach(product => {
        const finalPrice = product.myPrice * activeDiscountMultiplier;
        const priceDisplay = activeDiscountMultiplier < 1.0 
            ? "<span style='text-decoration: line-through; color: #999; font-size: 0.85rem; font-weight:400; margin-right: 8px;'>$" + Number(product.myPrice).toFixed(2) + "</span>$" + finalPrice.toFixed(2)
            : "$" + Number(product.myPrice).toFixed(2);

        const productCard = `
            <div class="product-card">
                <div class="product-render-box" style="${product.visualStyle || 'background: linear-gradient(135deg, #607d8b, #455a64); border-top: 8px solid #111;'}">
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

function executeStoreLiveSearch() {
    const inputElement = document.getElementById('store-search-input');
    if (inputElement) {
        searchQueryString = inputElement.value.trim();
        displayHomepageProducts();
    }
}
function verifyAdminGatewayPasskey() {
    const passkeyField = document.getElementById('admin-secret-pass-key');
    const errorDisplay = document.getElementById('admin-auth-error-msg');
    const lockModal = document.getElementById('admin-auth-lockout-modal');
    const dashboardView = document.getElementById('master-admin-dashboard-view');

    const secureMasterKey = "orion777"; 

    if (passkeyField.value === secureMasterKey) {
        lockModal.classList.add('hidden');
        dashboardView.classList.remove('hidden');
        displayAdminInventoryTable();
        activateFormSubmissionListener(); // Initialize adding listeners
    } else {
        errorDisplay.innerText = "❌ Access Denied. Your sanctuary secret key code is invalid.";
        passkeyField.value = "";
    }
}

function displayAdminInventoryTable() {
    const tableBody = document.getElementById('admin-table-body');
    if (!tableBody) return; tableBody.innerHTML = "";

    currentInventory.forEach((product) => {
        const row = `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 12px;"><strong>${product.name}</strong><br><small style='color:#999;'>${product.category}</small></td>
                <td style="padding: 12px; font-weight:bold; color:#2b70c9;">$${Number(product.myPrice).toFixed(2)}</td>
                <td style="padding: 12px; text-align: center;">
                    <button onclick="deleteProductBtnTrigger(${product.id})" style="background:#cc3333; color:white; padding:5px 10px; border:none; cursor:pointer; border-radius:2px;">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function activateFormSubmissionListener() {
    const addForm = document.getElementById('admin-add-product-form');
    if (!addForm) return;

    addForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('new-prod-name').value.trim();
        const category = document.getElementById('new-prod-category').value;
        const supplierCost = parseFloat(document.getElementById('new-prod-price').value) || 0;
        const description = document.getElementById('new-prod-desc').value.trim();

        // Automatically apply your 3x pricing tier markup multiplier rule parameters
        const finalRetailPrice = supplierCost * 3;

        // Automatically build custom vector container codes based on the chosen category string
        let visualStyle = "background: linear-gradient(135deg, #607d8b, #455a64); border-top: 8px solid #111;";
        let visualLabel = "📦 VESSEL";

        if (category === "Teas") { visualStyle = "background: linear-gradient(135deg, #1e3c72, #2a5298); border-top: 8px solid #00d2ff;"; visualLabel = "🦋 TEA BAG"; }
        else if (category === "Tonics") { visualStyle = "background: linear-gradient(135deg, #e91e63, #c2185b); border-top: 8px solid #ff5722;"; visualLabel = "🧪 TONIC"; }
        else if (category === "Books") { visualStyle = "background: linear-gradient(135deg, #673ab7, #512da8); border-top: 8px solid #fff;"; visualLabel = "📜 BOOK"; }
        else if (category === "Supplements") { visualStyle = "background: linear-gradient(135deg, #f12711, #f5af19); border-top: 8px solid #ffc107;"; visualLabel = "🌿 MOSS"; }

        const freshItem = {
            id: Date.now(),
            name: name,
            myPrice: finalRetailPrice,
            visualStyle: visualStyle,
            visualLabel: visualLabel,
            category: category,
            description: description
        };

        currentInventory.unshift(freshItem); // Place new product at the top of the grid
        syncMasterDatabaseToMemory(); // Force sync calculations to core memory storage parameters
        displayAdminInventoryTable(); // Refresh management tables
        addForm.reset(); // Wipe inputs clean

        alert("✨ Sanctuary Sync Success! " + name + " is now live with a 3x retail markup price of $" + finalRetailPrice.toFixed(2));
    });
}

function deleteProductBtnTrigger(id) {
    if (confirm("Permanently wipe this product from live storefront parameters?")) {
        currentInventory = currentInventory.filter(p => p.id !== id);
        syncMasterDatabaseToMemory();
        displayAdminInventoryTable();
    }
}

/* ==========================================
   BASKET MODULE INTERFACE LOGICS
   ========================================== */
function toggleCartDrawer(isOpen) {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) isOpen ? drawer.classList.remove('hidden') : drawer.classList.add('hidden');
}

function addItemToBasket(productId) {
    const product = currentInventory.find(p => p.id === productId);
    if (!product) return;
    const existingItem = activeCart.find(item => item.id === productId);
    if (existingItem) { existingItem.quantity += 1; } 
    else { activeCart.push({ id: product.id, name: product.name, price: product.myPrice * activeDiscountMultiplier, quantity: 1 }); }
    updateCartInterfaceTotals();
    alert(product.name + " packed into basket!");
}

function removeItemFromBasket(productId) {
    activeCart = activeCart.filter(item => item.id !== productId);
    updateCartInterfaceTotals();
}

function updateCartInterfaceTotals() {
    let tItems = 0; let tPrice = 0;
    const list = document.getElementById('cart-items-list');
    if (!list) return; list.innerHTML = "";
    if (activeCart.length === 0) { list.innerHTML = "<p style='text-align: center; color: #999; margin-top: 40px;'>Your basket is currently empty.</p>"; } 
    else {
        activeCart.forEach(item => {
            tItems += item.quantity; tPrice += item.price * item.quantity;
            list.innerHTML += `<div class="cart-item-row"><div class="cart-item-details"><h4>${item.name}</h4><small style="color:#777;">$${item.price.toFixed(2)} x ${item.quantity}</small></div><button onclick="removeItemFromBasket(${item.id})" style="background:none; border:none; color:#cc3333; cursor:pointer; font-size:0.85rem; text-decoration:underline;">Remove</button></div>`;
        });
    }
    document.getElementById('nav-cart-count').innerText = tItems + " items";
    document.getElementById('nav-cart-total').innerText = "$" + tPrice.toFixed(2);
    document.getElementById('cart-drawer-subtotal').innerText = "$" + tPrice.toFixed(2);
}

function checkoutEntireCartViaEmail() {
    if (activeCart.length === 0) return alert("Your basket is empty.");
    const businessEmail = "orionshealer.shop@gmail.com";
    let invoiceBody = "Hello Orion's Healer Sanctuary Team,\n\nI want to place an order for the following list of spiritual wellness items:\n\n✨ SACRED BASKET INVOICE:\n----------------------------------------\n";
    let calculatedGrandTotal = 0;
    activeCart.forEach((item, index) => {
        let rowTotal = item.price * item.quantity; calculatedGrandTotal += rowTotal;
        invoiceBody += (index + 1) + ". " + item.name + " [Qty: " + item.quantity + "] - $" + rowTotal.toFixed(2) + "\n";
    });
    invoiceBody += "----------------------------------------\n🛒 GRAND TOTAL: $" + calculatedGrandTotal.toFixed(2) + "\n\n📦 SHIPPING ATTRIBUTES:\nFull Name:\nDelivery Address:\nPhone:\n\nPlease process this manual transaction invoice.";
    window.location.href = "mailto:" + businessEmail + "?subject=" + encodeURIComponent("New Order Box Form") + "&body=" + encodeURIComponent(invoiceBody);
}

function filterCategory(categoryName) {
    currentCategoryFilter = categoryName;
    const links = document.querySelectorAll('.sidebar-cat-link');
    links.forEach(link => {
        link.innerText.toLowerCase().includes(categoryName.toLowerCase()) || (categoryName === "All" && link.innerText.includes("All")) ? link.classList.add('active') : link.classList.remove('active');
    });
    displayHomepageProducts();
}

function applyDiscountCoupon() {
    const input = document.getElementById('coupon-input').value.trim().toUpperCase();
    const msg = document.getElementById('coupon-message');
    if (input === "SEEKER10") { activeDiscountMultiplier = 0.90; msg.style.color = "green"; msg.innerText = "10% Coupon code applied successfully."; } 
    else { activeDiscountMultiplier = 1.0; msg.style.color = "red"; msg.innerText = "Invalid verification code."; }
    activeCart.forEach(item => { const m = currentInventory.find(p => p.id === item.id); if (m) item.price = m.myPrice * activeDiscountMultiplier; });
    displayHomepageProducts(); updateCartInterfaceTotals();
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
        currentReviews.unshift(newReview); localStorage.setItem('orion_reviews', JSON.stringify(currentReviews));
        displayCommunityReviews(); revForm.reset(); alert("Feedback saved!");
    });
}

window.onload = function() {
    displayHomepageProducts(); displayCommunityReviews(); updateCartInterfaceTotals();
};
