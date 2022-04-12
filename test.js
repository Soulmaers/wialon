Chart.register(ChartDataLabels);



const ctx = document.getElementById('myChart').getContext('2d');
chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Большое отклонение',
            'Незначительные отклонения',
            'В Норме'
        ],
        datasets: [{
            label: 'Дашбоард',
            data: [10, 20, 50],
            backgroundColor: [
                '#e03636',
                '#9ba805',
                '#3eb051'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                fontWeight: 'bold',
                font: {
                    size: 20,
                    lineHeight: 1.6,
                },
                formatter: function (value) {
                    return value + '%';
                }
            }
        }
    }
})