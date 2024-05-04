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

