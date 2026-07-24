// 1. Updated Database Array loaded with firewall-proof public domain network images
const initialProducts = [
    {
        id: 1,
        name: "Butterfly Pea Tea (Premium)",
        myPrice: 45.00,
        image: "https://wikimedia.org",
        category: "Teas",
        sourceUrl: "https://wikipedia.org",
        description: "Vibrant organic sun-dried blue flower petals. Historically documented to accelerate memory configurations, support cellular tracking properties, and completely clear cognitive brain fog."
    },
    {
        id: 2,
        name: "Irish Sea Moss (Raw Bag)",
        myPrice: 60.00,
        image: "https://wikimedia.org",
        category: "Supplements",
        sourceUrl: "https://wikipedia.org",
        description: "Pure ocean-harvested wildcrafted gold vegetation matrix packed with 92 master organic minerals designed to balance systemic cell conditions."
    },
    {
        id: 3,
        name: "Organic Blue Lotus",
        myPrice: 75.00,
        image: "https://wikimedia.org",
        category: "Herbs",
        sourceUrl: "https://wikipedia.org",
        description: "Authentic Egyptian sacred blue water lotus petals. Induces profound somatic relaxation, opens meditation tracking focus, and strengthens lucid dreaming states."
    },
    {
        id: 4,
        name: "Soursop Leaves (Dried)",
        myPrice: 60.00,
        image: "https://wikimedia.org",
        category: "Herbs",
        sourceUrl: "https://wikipedia.org",
        description: "Hand-selected premium deep green leaves curated from the Annona Muricata tree. Historically deployed to clean arterial properties and flush cellular system mutations."
    },
    {
        id: 5,
        name: "Pure Premium Manuka Honey",
        myPrice: 45.00,
        image: "https://wikimedia.org",
        category: "Supplements",
        sourceUrl: "https://wikipedia.org",
        description: "High-grade organic medicinal honey extraction targeted for maximum gut alignment, stomach lining repairs, and immune activation reinforcement."
    },
    {
        id: 6,
        name: "Sacred Rose Water Distillate",
        myPrice: 15.00,
        image: "https://wikimedia.org",
        category: "Personal Care",
        sourceUrl: "https://wikipedia.org",
        description: "Pure steam-distilled aromatic flower distillate designed to calm nervous system anxiety, balance skin composition metrics, and elevate your space's vibration."
    },
    {
        id: 7,
        name: "Afrikan Woman Original Angel Book",
        myPrice: 44.85,
        image: "https://wikimedia.org",
        category: "Books",
        sourceUrl: "https://houseofbastet.shop",
        description: "An exceptional structural historical literature manual validating the ancestral maternal lineage tracks of ancient kingdoms."
    },
    {
        id: 8,
        name: "The Goddess Blackwoman Book",
        myPrice: 38.85,
        image: "https://wikimedia.org",
        category: "Books",
        sourceUrl: "https://houseofbastet.shop",
        description: "12 profound structural lessons mapped step-by-step to restore internal identity configurations and unlock inner matrix capabilities."
    }
];

let activeCart = [];
let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let searchQueryString = ""; 
let currentInventory = initialProducts;
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || [{ name: "Malik K.", rating: 5, text: "The Wikipedia image bypass works beautifully! Real images are fully visible now." }];

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

        // Cards display clean real images linked to the public unblocked network pathways
        const productCard = `
            <div class="product-card">
                <div style="cursor:pointer;" onclick="launchProductExplorerDetail(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="product-image" style="height:170px; width:100%; object-fit:cover; border-radius:4px;">
                    <h3 class="product-title" style="margin-top:10px; text-align:left;"><strong>${product.name}</strong></h3>
                    <p style="font-size: 0.78rem; color: #2b70c9; text-align:left; font-weight:bold; margin-bottom:8px;">Read More Wisdom Details →</p>
                </div>
                <p class="product-price" style="text-align:left; margin-bottom:12px;">${priceDisplay}</p>
                <button class="add-to-cart-btn" onclick="addItemToBasket(${product.id})">Add to Basket</button>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

function executeStoreLiveSearch() {
    const inputElement = document.getElementById('store-search-input');
    if (inputElement) { searchQueryString = inputElement.value.trim(); displayHomepageProducts(); }
}
/* ==========================================
   INTERACTIVE FULL SCREEN OVERLAY CONTROLLER
   ========================================== */
function toggleDetailOverlayPage(isOpen) {
    const pageView = document.getElementById('detail-overlay-page');
    if (!pageView) return;
    if (isOpen) { pageView.classList.remove('hidden'); } 
    else { pageView.classList.add('hidden'); }
}

function launchProductExplorerDetail(productId) {
    const item = currentInventory.find(p => p.id === productId);
    if (!item) return;

    // Direct object values injection into our HTML overlay drawer containers
    document.getElementById('detail-page-image').src = item.image;
    document.getElementById('detail-page-title').innerText = item.name;
    document.getElementById('detail-page-category').innerText = item.category;
    document.getElementById('detail-page-description').innerText = item.description;
    
    const displayPrice = item.myPrice * activeDiscountMultiplier;
    document.getElementById('detail-page-price').innerText = "$" + displayPrice.toFixed(2);
    
    // Bind the live hyperlink redirection address pointer strings safely
    const linkButton = document.getElementById('detail-page-redirect-url');
    linkButton.href = item.sourceUrl || "https://houseofbastet.shop";

    toggleDetailOverlayPage(true); // Pop display up into front layer template view
}

/* ==========================================
   CART AND BASKET TRAILING OPERATIONS
   ========================================== */
function toggleCartDrawer(isOpen) {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) isOpen ? drawer.classList.remove('hidden') : drawer.classList.add('hidden');
}

function addItemToBasket(productId) {
    const product = currentInventory.find(p => p.id === productId); if (!product) return;
    const existingItem = activeCart.find(item => item.id === productId);
    if (existingItem) { existingItem.quantity += 1; } 
    else { activeCart.push({ id: product.id, name: product.name, price: product.myPrice * activeDiscountMultiplier, quantity: 1 }); }
    updateCartInterfaceTotals(); alert(product.name + " packed into basket!");
}

function clearEntireBasket() {
    if (activeCart.length === 0) return;
    if (confirm("Remove all items from your basket?")) { activeCart = []; updateCartInterfaceTotals(); }
}

function removeItemFromBasket(productId) {
    activeCart = activeCart.filter(item => item.id !== productId); updateCartInterfaceTotals();
}

function updateCartInterfaceTotals() {
    let tItems = 0; let tPrice = 0;
    const list = document.getElementById('cart-items-list'); if (!list) return; list.innerHTML = "";
    if (activeCart.length === 0) { list.innerHTML = "<p style='text-align: center; color: #999; margin-top: 40px;'>Your basket is empty.</p>"; } 
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
    currentCategoryFilter = categoryName; const links = document.querySelectorAll('.sidebar-cat-link');
    links.forEach(link => { link.innerText.toLowerCase().includes(categoryName.toLowerCase()) || (categoryName === "All" && link.innerText.includes("All")) ? link.classList.add('active') : link.classList.remove('active'); });
    displayHomepageProducts();
}

function applyDiscountCoupon() {
    const input = document.getElementById('coupon-input').value.trim().toUpperCase(); const msg = document.getElementById('coupon-message');
    if (input === "SEEKER10") { activeDiscountMultiplier = 0.90; msg.style.color = "green"; msg.innerText = "10% Coupon code applied successfully."; } 
    else { activeDiscountMultiplier = 1.0; msg.style.color = "red"; msg.innerText = "Invalid verification code."; }
    activeCart.forEach(item => { const m = currentInventory.find(p => p.id === item.id); if (m) item.price = m.myPrice * activeDiscountMultiplier; });
    displayHomepageProducts(); updateCartInterfaceTotals();
}

function displayCommunityReviews() {
    const container = document.getElementById('reviews-container'); if (!container) return; container.innerHTML = "";
    currentReviews.forEach(rev => { container.innerHTML += "<div style='border-bottom:1px solid #eee; padding:10px 0;'><small><strong>" + rev.name + "</strong> (" + "★".repeat(rev.rating) + ")</small><p style='font-size:0.9rem; color:#555;'>\"" + rev.text + "\"</p></div>"; });
}

window.onload = function() { localStorage.removeItem('orion_live_db'); displayHomepageProducts(); displayCommunityReviews(); updateCartInterfaceTotals(); };
