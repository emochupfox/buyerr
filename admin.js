// Update notification count example
document.addEventListener('DOMContentLoaded', () => {
    const notificationCount = 3; // Replace with actual count
    const badgeElement = document.querySelector('.badge');
    badgeElement.textContent = notificationCount;

    // Handle notification item click
    const notificationItems = document.querySelectorAll('.notification-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', () => {
            // Handle click event (e.g., open related content, mark as read)
            item.style.backgroundColor = '#f9f9f9'; // Change background color on click
        });
    });

    // Sample sales data (replace with your actual data)
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [500, 700, 900, 1200, 1000, 1500], // Monthly sales data
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color for fill area
                borderColor: 'rgba(255, 99, 132, 1)', // Border color
                borderWidth: 1
            }
        ]
    };

    // Initialize sales chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: salesData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

