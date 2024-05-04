document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var street = document.getElementById('street').value;
    var barangay = document.getElementById('barangay').value;
    var city = document.getElementById('city').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Save customer information to localStorage
    var customerInfo = {
        username: username,
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        street: street,
        barangay: barangay,
        city: city,
        phoneNumber: phoneNumber
        // Add other fields here as needed
    };
    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));

    // Redirect to shop page
    window.location.href = 'shop.html';
});