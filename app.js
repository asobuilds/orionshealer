// 1. Complete 14-Product Catalog with Firewall-Proof Image Streams
const initialProducts = [
    {
        id: 1,
        name: "Butterfly Pea Tea",
        myPrice: 45.00,
        image: "https://unsplash.com",
        category: "Teas",
        sourceUrl: "https://houseofbastet.shop",
        description: "Vibrant premium sun-dried blue flower petals designed to boost memory and clear internal channels."
    },
    {
        id: 2,
        name: "Irish Sea Moss (Raw Bag)",
        myPrice: 60.00,
        image: "https://unsplash.com",
        category: "Supplements",
        sourceUrl: "https://houseofbastet.shop",
        description: "Organic wildcrafted gold ocean vegetation packed with 92 essential minerals to revitalize your energy."
    },
    {
        id: 3,
        name: "Organic Blue Lotus",
        myPrice: 75.00,
        image: "https://unsplash.com",
        category: "Herbs",
        sourceUrl: "https://houseofbastet.shop",
        description: "Sustainably harvested Egyptian Blue Lotus petals to induce somatic calm and support deep meditation."
    },
    {
        id: 4,
        name: "Soursop Leaves (Dried)",
        myPrice: 60.00,
        image: "https://unsplash.com",
        category: "Herbs",
        sourceUrl: "https://houseofbastet.shop",
        description: "Hand-selected premium soursop leaves optimized for clearing toxicities from the blood."
    },
    {
        id: 5,
        name: "Elderberries Whole Pouch",
        myPrice: 75.00,
        image: "https://unsplash.com",
        category: "Herbs",
        sourceUrl: "https://houseofbastet.shop",
        description: "Pure whole elderberries providing structural immune support and natural seasonal protection."
    },
    {
        id: 6,
        name: "Sea Moss Bulk 5 lb Bag",
        myPrice: 300.00,
        image: "https://unsplash.com",
        category: "Supplements",
        sourceUrl: "https://houseofbastet.shop",
        description: "Master wholesale supply bag of gold raw Irish moss for long-term health sanctuary tracking."
    },
    {
        id: 7,
        name: "Hand-Carved Giraffe Sculpture",
        myPrice: 30.00,
        image: "https://unsplash.com",
        category: "Miscellaneous",
        sourceUrl: "https://houseofbastet.shop",
        description: "Hand-carved premium wooden giraffe sculpture artifact to anchor grounding earth energies."
    }
];

const remainingProducts = [
    {
        id: 8,
        name: "African Art Sanctuary Mask",
        myPrice: 1200.00,
        image: "https://unsplash.com",
        category: "Miscellaneous",
        sourceUrl: "https://houseofbastet.shop",
        description: "Authentic, high-vibrational hand-detailed traditional protective ancestral ritual mask."
    },
    {
        id: 9,
        name: "Premium Ankh Leather Bag",
        myPrice: 285.00,
        image: "https://unsplash.com",
        category: "Miscellaneous",
        sourceUrl: "https://houseofbastet.shop",
        description: "Hand-crafted custom leather messenger setup featuring the sacred Egyptian key of life emblem."
    },
    {
        id: 10,
        name: "Pure Premium Manuka Honey",
        myPrice: 45.00,
        image: "https://unsplash.com",
        category: "Supplements",
        sourceUrl: "https://houseofbastet.shop",
        description: "High-potency organic medicinal manuka honey compound for profound gut realignments."
    },
    {
        id: 11,
        name: "Sacred Rose Water Distillate",
        myPrice: 15.00,
        image: "https://unsplash.com",
        category: "Personal Care",
        sourceUrl: "https://houseofbastet.shop",
        description: "Pure steam-distilled organic rose water fluid to clear skin properties and elevate mood."
    },
    {
        id: 12,
        name: "Fit & Flat Belly Tonic",
        myPrice: 120.00,
        image: "https://unsplash.com",
        category: "Tonics",
        sourceUrl: "https://houseofbastet.shop",
        description: "A premium organic botanical fluid matrix engineered to cleanse the digestive track."
    },
    {
        id: 13,
        name: "Brain & Heart Balance Tonic",
        myPrice: 120.00,
        image: "https://unsplash.com",
        category: "Tonics",
        sourceUrl: "https://houseofbastet.shop",
        description: "A high-vibrational cellular extraction designed to enhance memory retention and sharpen focus."
    },
    {
        id: 14,
        name: "Lungs & Liver Cleansing Tonic",
        myPrice: 120.00,
        image: "https://unsplash.com",
        category: "Tonics",
        sourceUrl: "https://houseofbastet.shop",
        description: "Deep organic fluid compound formulated to flush metabolic toxicities and expand lung capacity."
    }
];

let activeCart = [];
let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let searchQueryString = ""; 
let currentInventory = initialProducts.concat(remainingProducts);
let currentReviews = [{ name: "Malik K.", rating: 5, text: "The new layout is highly responsive on my phone!" }];

function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return; productGrid.innerHTML = "";

    const itemsToDisplay = currentInventory.filter(product => {
        const matchesCategory = currentCategoryFilter === "All" || product.category.toLowerCase() === currentCategoryFilter.toLowerCase();
        const matchesSearch = product.name.toLowerCase().includes(searchQueryString.toLowerCase()) || product.description.toLowerCase().includes(searchQueryString.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (itemsToDisplay.length === 0) {
        productGrid.innerHTML = "<p style='grid-column: 1/-1; padding: 40px; text-align:center; color:#999;'>No items found matching your filters.</p>";
        return;
    }

    itemsToDisplay.forEach(product => {
        const finalPrice = product.myPrice * activeDiscountMultiplier;
        const priceDisplay = activeDiscountMultiplier < 1.0 
            ? "<span style='text-decoration: line-through; color: #999; font-size: 0.85rem; font-weight:400; margin-right: 8px;'>$" + Number(product.myPrice).toFixed(2) + "</span>$" + finalPrice.toFixed(2)
            : "$" + Number(product.myPrice).toFixed(2);

        const productCard = `
            <div class="product-card">
                <div style="cursor:pointer;" onclick="launchProductExplorerDetail(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="product-image" style="height:170px; width:100%; object-fit:cover; border-radius:4px;">
                    <h3 class="product-title" style="margin-top:10px; text-align:left;"><strong>${product.name}</strong></h3>
                    <p style="font-size: 0.78rem; color: #2b70c9; text-align:left; font-weight:bold; margin-bottom:8px;">Read Details & Source →</p>
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
function toggleDetailOverlayPage(isOpen) {
    const pageView = document.getElementById('detail-overlay-page');
    if (pageView) isOpen ? pageView.classList.remove('hidden') : pageView.classList.add('hidden');
}

function launchProductExplorerDetail(productId) {
    const item = currentInventory.find(p => p.id === productId);
    if (!item) return;

    document.getElementById('detail-page-image').src = item.image;
    document.getElementById('detail-page-title').innerText = item.name;
    document.getElementById('detail-page-category').innerText = item.category;
    document.getElementById('detail-page-description').innerText = item.description;
    document.getElementById('detail-page-price').innerText = "$" + (item.myPrice * activeDiscountMultiplier).toFixed(2);
    
    const linkButton = document.getElementById('detail-page-redirect-url');
    linkButton.href = item.sourceUrl;

    toggleDetailOverlayPage(true);
}

function toggleCartDrawer(isOpen) {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) isOpen ? drawer.classList.remove('hidden') : drawer.classList.add('hidden');
}

function addItemToBasket(productId) {
    const product = currentInventory.find(p => p.id === productId); if (!product) return;
    const existingItem = activeCart.find(item => item.id === productId);
    if (existingItem) { existingItem.quantity += 1; } 
    else { activeCart.push({ id: product.id, name: product.name, price: product.myPrice * activeDiscountMultiplier, quantity: 1 }); }
    updateCartInterfaceTotals(); alert(product.name + " added to basket!");
}

function clearEntireBasket() {
    if (activeCart.length === 0) return;
    if (confirm("Remove all items?")) { activeCart = []; updateCartInterfaceTotals(); }
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
    let invoiceBody = "Hello Orion's Healer Team,\n\nI want to place an order for:\n\n✨ INVOICE:\n----------------------------------------\n";
    let calculatedGrandTotal = 0;
    activeCart.forEach((item, index) => {
        let rowTotal = item.price * item.quantity; calculatedGrandTotal += rowTotal;
        invoiceBody += (index + 1) + ". " + item.name + " [Qty: " + item.quantity + "] - $" + rowTotal.toFixed(2) + "\n";
    });
    invoiceBody += "----------------------------------------\n🛒 GRAND TOTAL: $" + calculatedGrandTotal.toFixed(2) + "\n\n📦 SHIPPING DETAILS:\nFull Name:\nDelivery Address:\nPhone:\n\nPlease process this manual transaction invoice.";
    window.location.href = "mailto:" + businessEmail + "?subject=" + encodeURIComponent("New Order Form") + "&body=" + encodeURIComponent(invoiceBody);
}

function filterCategory(categoryName) {
    currentCategoryFilter = categoryName; const links = document.querySelectorAll('.sidebar-cat-link');
    links.forEach(link => { link.innerText.toLowerCase().includes(categoryName.toLowerCase()) || (categoryName === "All" && link.innerText.includes("All")) ? link.classList.add('active') : link.classList.remove('active'); });
    displayHomepageProducts();
}

function applyDiscountCoupon() {
    const input = document.getElementById('coupon-input').value.trim().toUpperCase(); const msg = document.getElementById('coupon-message');
    if (input === "SEEKER10") { activeDiscountMultiplier = 0.90; msg.style.color = "green"; msg.innerText = "10% Coupon applied."; } 
    else { activeDiscountMultiplier = 1.0; msg.style.color = "red"; msg.innerText = "Invalid verification code."; }
    activeCart.forEach(item => { const m = currentInventory.find(p => p.id === item.id); if (m) item.price = m.myPrice * activeDiscountMultiplier; });
    displayHomepageProducts(); updateCartInterfaceTotals();
}

function displayCommunityReviews() {
    const container = document.getElementById('reviews-container'); if (!container) return; container.innerHTML = "";
    currentReviews.forEach(rev => { container.innerHTML += "<div style='border-bottom:1px solid #eee; padding:10px 0;'><small><strong>" + rev.name + "</strong> (" + "★".repeat(rev.rating) + ")</small><p style='font-size:0.9rem; color:#555;'>\"" + rev.text + "\"</p></div>"; });
}

window.onload = function() { displayHomepageProducts(); displayCommunityReviews(); updateCartInterfaceTotals(); };
