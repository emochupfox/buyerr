document.addEventListener('DOMContentLoaded', function() {
    // Monthly Sales Data
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Monthly Sales',
                backgroundColor: 'rgba(244, 134, 134, 0.6)',
                borderColor: 'rgba(244, 134, 134, 1)',
                borderWidth: 2,
                data: [1000, 1500, 1200, 1800, 2000, 1700],
            },
        ],
    };

    // Executive Summary Data
    const summaryData = {
        labels: ['Revenue', 'Top Selling Products', 'Geographical Distribution'],
        datasets: [
            {
                label: 'Executive Summary',
                backgroundColor: 'rgba(244, 134, 134, 0.6)',
                borderColor: 'rgba(244, 134, 134, 1)',
                borderWidth: 2,
                data: [3500, 8, 3], // Example data for Revenue, Top Selling Products, and Geographical Distribution
            },
        ],
    };

    // Get canvas elements
    const ctxSales = document.getElementById('salesChart');
    const ctxSummary = document.getElementById('executiveSummaryChart');
    const ctxUserEngagement = document.getElementById('userEngagementChart');
    const ctxProductInsights = document.getElementById('productInsightsChart');
    const ctxCampaignPerformance = document.getElementById('campaignPerformanceChart');
    const ctxSatisfactionMetrics = document.getElementById('satisfactionMetricsChart');

    // Initialize Monthly Sales Chart (Line Chart)
    if (ctxSales) {
        new Chart(ctxSales, {
            type: 'line',
            data: salesData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    // Initialize Executive Summary Chart (Bar Chart)
    if (ctxSummary) {
        new Chart(ctxSummary, {
            type: 'bar',
            data: summaryData,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
    }

    // User Engagement Metrics Data (Pie Chart)
    if (ctxUserEngagement) {
        const userEngagementData = {
            labels: ['Session Duration', 'Bounce Rate', 'Conversion Rates'],
            datasets: [
                {
                    label: 'User Engagement Metrics',
                    backgroundColor: ['#ff9999', '#66b3ff', '#99ff99'],
                    borderWidth: 2,
                    data: [20, 30, 50], // Example data for Session Duration, Bounce Rate, and Conversion Rates
                },
            ],
        };

        new Chart(ctxUserEngagement, {
            type: 'pie',
            data: userEngagementData,
            options: {
                responsive: true,
            },
        });
    }

    // Product Insights Data (Bar Chart)
    if (ctxProductInsights) {
        const productInsightsData = {
            labels: ['New Product Launches', 'Inventory Turnover', 'Popular Product Categories'],
            datasets: [
                {
                    label: 'Product Insights',
                    backgroundColor: 'rgba(255, 159, 64, 0.6)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 2,
                    data: [5, 10, 8], // Example data for New Product Launches, Inventory Turnover, and Popular Product Categories
                },
            ],
        };

        new Chart(ctxProductInsights, {
            type: 'bar',
            data: productInsightsData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    // Marketing Campaign Performance Data (Line Chart)
    if (ctxCampaignPerformance) {
        const campaignPerformanceData = {
            labels: ['ROI', 'Customer Acquisition Channels'],
            datasets: [
                {
                    label: 'Marketing Campaign Performance',
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    data: [80, 70], // Example data for ROI and Customer Acquisition Channels
                },
            ],
        };

        new Chart(ctxCampaignPerformance, {
            type: 'line',
            data: campaignPerformanceData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }

    // Customer Satisfaction Metrics Data (Bar Chart)
    if (ctxSatisfactionMetrics) {
        const satisfactionMetricsData = {
            labels: ['Customer Feedback Summary', 'Areas for Improvement'],
            datasets: [
                {
                    label: 'Customer Satisfaction Metrics',
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 2,
                    data: [4.5, 3.8], // Example data for Customer Feedback Summary and Areas for Improvement
                },
            ],
        };

        new Chart(ctxSatisfactionMetrics, {
            type: 'bar',
            data: satisfactionMetricsData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }
});
