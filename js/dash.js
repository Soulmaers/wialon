const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Большое отклонение',
            'Незначительные отклонения',
            'В Норме'
        ],
        datasets: [{
            label: 'Дашбоард',
            data: [10, 20, 70],
            backgroundColor: [
                '#e03636',
                '#9ba805',
                '#3eb051'
            ],
            hoverOffset: 4
        }]
    }
})


const ctx2 = document.getElementById('myChart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: [
            'Работающие датчики',
            'Нет данных от датчиков'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [90, 10],
            backgroundColor: [
                '#3eb051',
                'gray'
            ],
            hoverOffset: 4
        }]
    }
})