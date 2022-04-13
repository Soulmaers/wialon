Chart.register(ChartDataLabels);
//const densityCanvas = document.getElementById("densityChart").getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [7, 5, 8, 7, 8, 6, 9, 5, 8, 7, 5, 6, 6, 5, 8, 7, 2, 7, 2, 5, 8, 7, 7, 4],
            label: 'Давление',
            fill: false,
            borderColor: 'lightgreen',
            yAxisID: 'left-y-axis'
        }, {
            data: [9, 8, 8, 7, 9, 7, 5, 7, 3, 5, 8, 7, 5, 2, 7, 5, 8, 7, 5, 8, 7, 4, 2, 1],
            label: 'Температура',
            fill: false,
            borderColor: 'lightblue',
            yAxisID: 'right-y-axis'
        }],
        labels: ['01.03', '02.03', '03.03', '04.03', '05.03', '06.03',
            '07.03', '08.03', '08.03', '09.03', '10.03', '11.03',
            '12.03', '13.03', '14.03', '15.03', '16.03', '17.03',
            '18.03', '19.03', '20.03', '21.03', '22.03', '23.03']
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 20,
                    },
                    color: 'gray'
                }
            }
        },
        scales: {
            'left-y-axis': {
                type: 'linear',
                position: 'left',
                min: 0,
                max: 12,
                ticks: {
                    font: {
                        size: 18,
                    }
                }


            },
            'right-y-axis': {
                type: 'linear',
                position: 'right',
                min: 0,
                max: 12,
                ticks: {
                    font: {
                        size: 18,
                    }
                }
            }
        },

    }

});

/*
var speedCanvas = document.getElementById("speedChart");

//Chart.defaults.global.defaultFontFamily = "Lato";
//Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Давление",
    data: [8, 9, 7, 2, 2, 5, 4],
    lineTension: 0,
    fill: false,
    borderColor: 'red'

};

var dataSecond = {
    label: "Температура",
    data: [2, 3, 6, 6, 7, 3, 5],
    lineTension: 0,
    fill: false,
    borderColor: 'blue',
    yAxisID: 'yAsis'
};

var speedData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [dataFirst, dataSecond]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: 'black'
        }
    },

    scales: {
        myScale: {
            position: 'right', // `axis` is determined by the position as `'y'`
            min: 0,
            max: 15
        }

    }
};

var lineChart = new Chart(speedCanvas, {
    type: 'line',
    data: speedData,
    options: chartOptions
});*/
//Chart.defaults.global.defaultFontFamily = "Lato";
//Chart.defaults.global.defaultFontSize = 18;



/*var gravityData = {
    label: 'Температура',
    data: [3, 8, 9, 3, 8, 9, 8, 2],
    backgroundColor: 'rgba(99, 132, 0, 0.6)',
    borderColor: 'rgba(99, 132, 0, 1)',
    yAxisID: "y-axis-gravity"
};*/






/*
var barChart = new Chart(densityCanvas, {
    type: 'line',
    data: {
        labels: ["Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь"],
        datasets: [{
            label: 'Давление',
            data: [9, 5, 5, 3, 1, 2, 1, 6],
            backgroundColor: 'rgba(0, 99, 132, 0.6)',
            borderColor: 'rgba(0, 99, 132, 1)',
            yAxisID: 'yAxis'
        },
        {
            label: 'Температура',
            data: [3, 8, 9, 3, 8, 9, 8, 2],
            backgroundColor: 'rgba(99, 132, 0, 0.6)',
            borderColor: 'rgba(99, 132, 0, 1)',
            yAxisID2: 'yAxis2'
        }],

    },
    options: {
        scales: {
            myScale: {
                position: 'right', // `axis` is determined by the position as `'y'`
                min: 0,
                max: 15
            }
        }

    }
});*/