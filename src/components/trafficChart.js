// trafficChart.js
document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("trafficChart").getContext("2d");
  
    const trafficData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Network Anomalies",
          data: [12, 19, 3, 5, 2, 3, 9],
          borderColor: "rgba(239, 68, 68, 1)", // Red
          backgroundColor: "rgba(239, 68, 68, 0.2)",
          tension: 0.4,
        },
      ],
    };
  
    const trafficChart = new Chart(ctx, {
      type: "line",
      data: trafficData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
          x: {
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "white",
            },
          },
        },
      },
    });
  });