// 1. Master Inventory Array featuring 100% stable Base64 local image data strings
const initialProducts = [
    {
        id: 1,
        name: "Afrikan Woman Original Angel Book",
        myPrice: 44.85,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC53vKfAAAAYFBMVEUAAAD///8vLy83Nzc7Ozs/Pz9PT09UVFRVVVVWVlZYWFhZWVlaWlpcXFxdXV1eXl5gYGBmZmZubm52dnZ6enqKioqSkpKUlJSampqcnJygoKCpqamqqqqrq6usrKytra28vLyW1gY3AAAA30lEQVRYw+3V2w6CMBAF0GKhgBwE5SgI//9XG6OJiYm96EvvSdrTNDvTaToD9GfCgZhwICbo6wS9XNDLgS6O0OUEHQ60ccCGA00csOaAFQesOKDGAZUDKhwwZ8CcAW0GtBnQZECVAZUBpQGFAYUBwYDf7w7Ew7pTHeqGqfF+b77XW8SHeInwEC7ie7SFeAnbYQtpE7LDFrImZIdMJI1MJIWwkVbCRloJG0kjbCSNsBFX4kbciCtxI67EjbgSFeJKVIgrUSGuRIWwEBXCQlSIn6mIEnG7mYgS8bMRX0wOfgEwuwb39gR80wAAAABJRU5ErkJggg==",
        category: "Books",
        description: "An authentic, deep historical validation text exploring sacred archetypal matriarchal lineages."
    },
    {
        id: 2,
        name: "The Goddess Blackwoman Book",
        myPrice: 38.85,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC53vKfAAAAYFBMVEUAAAD///8vLy83Nzc7Ozs/Pz9PT09UVFRVVVVWVlZYWFhZWVlaWlpcXFxdXV1eXl5gYGBmZmZubm52dnZ6enqKioqSkpKUlJSampqcnJygoKCpqamqqqqrq6usrKytra28vLyW1gY3AAAA30lEQVRYw+3V2w6CMBAF0GKhgBwE5SgI//9XG6OJiYm96EvvSdrTNDvTaToD9GfCgZhwICbo6wS9XNDLgS6O0OUEHQ60ccCGA00csOaAFQesOKDGAZUDKhwwZ8CcAW0GtBnQZECVAZUBpQGFAYUBwYDf7w7Ew7pTHeqGqfF+b77XW8SHeInwEC7ie7SFeAnbYQtpE7LDFrImZIdMJI1MJIWwkVbCRloJG0kjbCSNsBFX4kbciCtxI67EjbgSFeJKVIgrUSGuRIWwEBXCQlSIn6mIEnG7mYgS8bMRX0wOfgEwuwb39gR80wAAAABJRU5ErkJggg==",
        category: "Books",
        description: "12 detailed foundational lessons mapped explicitly to restore identity configurations and ancestral knowledge."
    },
    {
        id: 3,
        name: "Fit & Flat Belly Tonic",
        myPrice: 120.00,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC53vKfAAAAWlBMVEUAAAB3d3eKioqTk5OUlJSampqcnJygoKCpqamqqqqrq6usrKytra20tLS1tbW5ubm7u7vGxsbHx8fLy8vMzMzn5+fp6enr6+vt7e3u7u7y8vLz8/P39/f5+fn///+IaswPAAAA00lEQVRYw+3V2w6DIBBA0YICKrXWihbF//+qjYmJiYndmUvvSdrTNDvTaboC9GfCnphwICboawNdXNDDgS6O0OUEHQ60ccCGA00csOaAFQesOKDGAZUDKhwwZ8CcAW0GtBnQZECVAZUBpQGFAYUBwYDf7w7Ew7pTHeqGqfF+b77XW8SHeInwEC7ie7SFeAnbYQtpE7LDFrImZIdMJI1MJIWwkVbCRloJG0kjbCSNsBFX4kbciCtxI67EjbgSFeJKVIgrUSGuRIWwEBXCQlSIn6mIEnG7mYgS8bMRX0wOe8Ab1Ngl0vAAAAAElFTkErkJggg==",
        category: "Tonics",
        description: "A premium organic biological liquid fluid engineered to support digestive realignments and clear central energy tracts."
    },
    {
        id: 4,
        name: "Brain & Heart Balance Tonic",
        myPrice: 120.00,
        image: "data:image/png;base64,iVBORw0KGgoAAAAAAFAAAABQCAMAAAC53vKfAAAAWlBMVEUAAAB3d3eKioqTk5OUlJSampqcnJygoKCpqamqqqqrq6usrKytra20tLS1tbW5ubm7u7vGxsbHx8fLy8vMzMzn5+fp6enr6+vt7e3u7u7y8vLz8/P39/f5+fn///+IaswPAAAA00lEQVRYw+3V2w6DIBBA0YICKrXWihbF//+qjYmJiYndmUvvSdrTNDvTaboC9GfCnphwICboawNdXNDDgS6O0OUEHQ60ccCGA00csOaAFQesOKDGAZUDKhwwZ8CcAW0GtBnQZECVAZUBpQGFAYUBwYDf7w7Ew7pTHeqGqfF+b77XW8SHeInwEC7ie7SFeAnbYQtpE7LDFrImZIdMJI1MJIWwkVbCRloJG0kjbCSNsBFX4kbciCtxI67EjbgSFeJKVIgrUSGuRIWwEBXCQlSIn6mIEnG7mYgS8bMRX0wOe8Ab1Ngl0vAAAAAElFTkErkJggg==",
        category: "Tonics",
        description: "A potent high-vibrational cellular extraction designed to enhance memory retention and stabilize arterial fields."
    }
];

let activeDiscountMultiplier = 1.0; 
let currentCategoryFilter = "All";
let currentInventory = JSON.parse(localStorage.getItem('orion_inventory')) || initialProducts;
let currentReviews = JSON.parse(localStorage.getItem('orion_reviews')) || [
    { name: "Malik K.", rating: 5, text: "The historical literature texts provide unmatched spiritual clarity." }
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

        // Standard image rendering structure utilizing completely unblockable data vectors
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" style="max-height:180px; width:100%; object-fit:contain; background:#ffffff;">
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

window.onload = function() {
    localStorage.removeItem('orion_inventory');
    currentInventory = initialProducts;
    displayHomepageProducts(); displayCommunityReviews();
};
