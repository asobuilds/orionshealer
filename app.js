// 1. Core Default Product Data Storage (Fallback Database Layer)
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

// Load active inventory directly from persistent memory, or default to the list above if empty
let currentInventory = JSON.parse(localStorage.getItem('orion_inventory')) || initialProducts;

// Save active database adjustments to storage memory
function saveInventoryToMemory() {
    localStorage.setItem('orion_inventory', JSON.stringify(currentInventory));
}

/* ==========================================
   HOMEPAGE LAYOUT CONTROLLER
   ========================================== */
function displayHomepageProducts() {
    const productGrid = document.getElementById('products');
    if (!productGrid) return; // Exit if we aren't on index.html

    productGrid.innerHTML = "";

    currentInventory.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p style="font-size: 0.85rem; color: #666; margin-bottom: 12px; line-height: 1.4;">${product.description}</p>
                    <p class="product-price">$${Number(product.myPrice).toFixed(2)}</p>
                    <button class="add-to-cart-btn" onclick="redirectToEmail('${product.name}', ${product.myPrice})">Order via Email</button>
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
   ADMIN MANAGEMENT PANEL CONTROLLER
   ========================================== */
function displayAdminInventoryTable() {
    const tableBody = document.getElementById('admin-table-body');
    if (!tableBody) return; // Exit if we aren't on admin.html

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

// Automatically populate the 3x markup field when typing supplier pricing cost
const originalPriceInput = document.getElementById('prod-original-price');
if (originalPriceInput) {
    originalPriceInput.addEventListener('input', function() {
        const supplierCost = parseFloat(this.value) || 0;
        document.getElementById('prod-my-price').value = (supplierCost * 3).toFixed(2);
    });
}

// Handling inventory item submission saves (Add / Update actions)
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
            alert("Product information successfully updated in inventory database!");
        } else {
            const newProduct = { id: Date.now(), name, category, originalPrice, myPrice, image, description };
            currentInventory.push(newProduct);
            alert("New spiritual listing added successfully!");
        }

        saveInventoryToMemory();
        adminForm.reset();
        resetAdminFormState();
        displayAdminInventoryTable();
    });
}

// Fill management dashboard module inputs to execute an operational edit
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
    if (confirm("Are you sure you want to delete this product listing permanently from your storefront?")) {
        currentInventory = currentInventory.filter(p => p.id !== id);
        saveInventoryToMemory();
        displayAdminInventoryTable();
    }
}

const cancelEditBtn = document.getElementById('cancel-edit-btn');
if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', function() {
        adminForm.reset();
        resetAdminFormState();
    });
}

function resetAdminFormState() {
    document.getElementById('product-id').value = "";
    document.getElementById('form-title').innerText = "Create New Product Listing";
    document.getElementById('submit-btn').innerText = "Save Product to Inventory";
    document.getElementById('cancel-edit-btn').classList.add('hidden');
}

/* ==========================================
   INITIALIZATION LAUNCH BLOCK
   ========================================== */
window.onload = function() {
    displayHomepageProducts();
    displayAdminInventoryTable();
    
    const loggedUser = JSON.parse(localStorage.getItem('orion_user'));
    const authNav = document.getElementById('nav-auth-btn');
    if (loggedUser && authNav) {
        authNav.innerText = `Peace, ${loggedUser.name.split(' ')[0]}`;
    }
};

/* ==========================================
   MEMBERSHIP USER REGISTRATION SCRIPT CONTROLS
   ========================================== */
function switchAuthMode(mode) {
    const loginBox = document.getElementById('login-box');
    const registerBox = document.getElementById('register-box');
    if (!loginBox || !registerBox) return;

    if (mode === 'register') {
        loginBox.classList.add('hidden');
        registerBox.classList.remove('hidden');
    } else {
        registerBox.classList.add('hidden');
        loginBox.classList.remove('hidden');
    }
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
        if (authNav) authNav.innerText = `Peace, ${userData.name.split(' ')[0]}`;
        switchAuthMode('login');
    });
}

function recoverPassword() {
    const email = prompt("Enter your registered email address to receive a recovery link:");
    if (email) alert(`A validation link has been sent to: ${email}`);
}
