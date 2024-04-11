window.onload = function() {
    // Women in Leadership Roles chart
    var leadershipCtx = document.getElementById('leadershipChart').getContext('2d');
    new Chart(leadershipCtx, {
      type: 'bar',
      data: {
        labels: ['2015', '2020', '2025 (Projected)'],
        datasets: [{
          label: 'Women in Leadership Roles (%)',
          data: [23.7, 27.5, 32.0],
          backgroundColor: '#007bff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: function(value) {
                return value + '%';
              },
              maxTicksLimit: 2
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  
    // Gender Wage Gap chart
    var wageGapCtx = document.getElementById('wageGapChart').getContext('2d');
    new Chart(wageGapCtx, {
      type: 'line',
      data: {
        labels: ['2015', '2020', '2025 (Projected)'],
        datasets: [{
          label: 'Gender Wage Gap (%)',
          data: [21.2, 19.0, 16.5],
          backgroundColor: '#007bff',
          borderColor: '#007bff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            max: 25,
            ticks: {
              callback: function(value) {
                return value + '%';
              },
              maxTicksLimit: 2
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  
    // Women's Participation in the Workforce chart
    var workforceCtx = document.getElementById('workforceChart').getContext('2d');
    new Chart(workforceCtx, {
      type: 'pie',
      data: {
        labels: ['Men', 'Women'],
        datasets: [{
          label: 'Workforce Participation',
          data: [65, 35],
          backgroundColor: ['#007bff', '#6c757d']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Women\'s Participation in the Workforce'
          }
        },
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }
    });
  };