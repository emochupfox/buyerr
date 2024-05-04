// Function to open the product details modal
function openProductDetailsModal(productId, title, description) {
    // Populate the modal with product information
    document.getElementById('productTitle').innerText = title;
    document.getElementById('productDescription').innerText = description;

    // Display the modal
    document.getElementById('productDetailsModal').style.display = 'block';

    // Store product information in sessionStorage for later retrieval during purchase
    sessionStorage.setItem('productId', productId);
}

// Function to close the product details modal
function closeProductDetailsModal() {
    document.getElementById('productDetailsModal').style.display = 'none';
}

// Function to handle Buy Now button click
function buyNow() {
    // Retrieve product information from sessionStorage
    const productId = sessionStorage.getItem('productId');

    // Here you can implement logic to process the purchase and record it in the account
    // For demonstration purposes, let's just display a message
    alert('Product with ID ' + productId + ' purchased successfully!');

    // Close the product details modal after purchase
    closeProductDetailsModal();
}
