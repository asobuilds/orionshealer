// This array holds the product data copied from House of Bastet
// The prices listed here are already multiplied by 3 as you requested!
const products = [
    {
        id: 1,
        name: "Irish Sea Moss",
        originalPrice: 20.00,
        myPrice: 60.00, // 20.00 * 3
        image: "https://placeholder.com", // Temporary placeholder image
        category: "Supplements"
    },
    {
        id: 2,
        name: "Soursop 7 Archangels",
        originalPrice: 40.00,
        myPrice: 120.00, // 40.00 * 3
        image: "https://placeholder.com",
        category: "Supplements"
    },
    {
        id: 3,
        name: "The Foundational Wellness Bundle",
        originalPrice: 150.00,
        myPrice: 450.00, // 150.00 * 3
        image: "https://placeholder.com",
        category: "Bundles"
    },
    {
        id: 4,
        name: "Palo Santo Incense",
        originalPrice: 2.00,
        myPrice: 6.00, // 2.00 * 3
        image: "https://placeholder.com",
        category: "Incense"
    }
];

// This function will display the products on our website page
function displayProducts() {
    const productGrid = document.getElementById('products');
    
    // Clear out the "Our inventory is loading..." placeholder text
    productGrid.innerHTML = "";

    // Loop through each product in our array and build its visual card
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.myPrice.toFixed(2)}</p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        `;
        // Append the new card layout directly into the HTML page
        productGrid.innerHTML += productCard;
    });
}

// Run the function as soon as the webpage finishes loading
window.onload = displayProducts;
