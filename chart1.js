const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Cotton Pickers', 'Transportation', 'Looming', 'Sewing', 'Packaging', 'Marketplace','Profit'],
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