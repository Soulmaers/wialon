Chart.register(ChartDataLabels);
const densityCanvas = document.getElementById("densityChart").getContext('2d');

//Chart.defaults.global.defaultFontFamily = "Lato";
//Chart.defaults.global.defaultFontSize = 18;

var densityData = {
    label: 'Давление',
    data: [9, 5, 5, 3, 1, 2, 1, 6],
    backgroundColor: 'rgba(0, 99, 132, 0.6)',
    borderColor: 'rgba(0, 99, 132, 1)',
    yAxisID: "y-axis-density"
};

var gravityData = {
    label: 'Температура',
    data: [3, 8, 9, 3, 8, 9, 8, 2],
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    borderColor: 'rgba(99, 132, 0, 1)',
    yAxisID: "y-axis-gravity"
};

var planetData = {
    labels: ["Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь"],
    datasets: [densityData, gravityData]
};

var chartOptions = {
    scales: {
        xAxes: [{
            barPercentage: 1,
            categoryPercentage: 0.6,

        }],
        yAxes: [{
            id: "y-axis-density"
        }, {
            id: "y-axis-gravity"
        }]
    }
};

var barChart = new Chart(densityCanvas, {
    type: 'line',
    data: planetData,
    options: chartOptions
});