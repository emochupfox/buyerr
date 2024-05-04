document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query from the input
    var searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    // Get all product elements
    var products = document.querySelectorAll('.product');

    // Loop through each product and check if it matches the search criteria
    products.forEach(function(product) {
        var productName = product.querySelector('h2').textContent.trim().toLowerCase();
        var productColor = product.querySelector('.product-color').textContent.trim().toLowerCase();
        var productSize = product.querySelector('.product-size').textContent.trim().toLowerCase();
        var productFabric = product.querySelector('.product-fabric').textContent.trim().toLowerCase();

        // Check if any part of the product matches the search query
        if (productName.includes(searchQuery) || productColor.includes(searchQuery) || productSize.includes(searchQuery) || productFabric.includes(searchQuery)) {
            product.style.display = 'block'; // Show the product
        } else {
            product.style.display = 'none'; // Hide the product
        }
    });
});

function searchProduct() {
    // Get the value entered by the user in the search input field
    var searchText = document.getElementById('searchInput').value.trim().toLowerCase();
    
    // Get all product items
    var products = document.querySelectorAll('.product');

    // Loop through each product to check if it matches the search text
    products.forEach(function(product) {
        var productName = product.querySelector('h2').textContent.trim().toLowerCase();

        // If the product name contains the search text, show the product, otherwise hide it
        if (productName.includes(searchText)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


// index.js

// Function to toggle visibility of dropdown menu
function toggleDropdown(buttonId, dropdownId) {
    var button = document.getElementById(buttonId);
    var dropdown = document.getElementById(dropdownId);
    
    button.addEventListener('click', function() {
        // Close all other dropdowns
        closeAllDropdowns();
        dropdown.classList.toggle('show');
    });
}

// Function to close all dropdown menus except the one being clicked
function closeAllDropdowns() {
    var dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove('show');
    });
}

// Toggle menu dropdown
toggleDropdown('menuButton', 'menuDropdown');
// Toggle search dropdown
toggleDropdown('searchButton', 'searchMenu');
// Toggle user dropdown
toggleDropdown('userButton', 'userMenu');

