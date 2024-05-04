function approveOrder(button) {
    // Change button style to green upon approval
    button.style.backgroundColor = '#5cb85c'; // Green color
    button.style.color = 'white'; // White text color
    button.innerText = 'Approved'; // Update button text
    button.disabled = true; // Disable button after approval
}

function declineOrder(button) {
    // Change button style to red upon decline
    button.style.backgroundColor = '#d9534f'; // Red color
    button.style.color = 'white'; // White text color
    button.innerText = 'Declined'; // Update button text
    button.disabled = true; // Disable button after decline
}
