const ctx2 = document.getElementById('doughnut');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Cotton Pickers', 'Transportation', 'Looming', 'Sewing', 'Packaging', 'Marketplace',],
      datasets: [{
        label: '$',
        data: [5, 3, 1, 1, 1, 3,6],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });