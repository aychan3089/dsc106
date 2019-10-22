
// Create Chart for all Sales per Month 
Highcharts.chart('container1', {
    chart: {
        type: 'line',
    }, 
    title: {
        text: 'Total Sales per Month'
    }, 
    subtitle: {
        text: 'Jananuary 2016 to September 2019'
    }, 
    xAxis: {
        title: {
            text: 'Months - Year (20XX)'
        },
        categories: months
    }, 
    yAxis: {
        title: {
            text: '$ of Sales in USD'
        }
    }, 

    series: [{
        name: 'Total Sales',
        data: salesPerMonth
    }], 
});

salesColored = salesPerMonthDiff.slice(0)
salesColored[33] = {y: salesColored[33], color:'#BF0B23', dataLabels: {enabled: true}}
// Diff chart
Highcharts.chart('container2', {
    chart: {
        type: 'column',
    }, 
    title: {
        text: 'Diff in Sales per Month'
    }, 
    subtitle: {
        text: 'Jananuary 2016 to September 2019'
    }, 
    xAxis: {
        title: {
            text: 'Months - Year (20XX)'
        },
        categories: months
    }, 
    yAxis: {
        title: {
            text: '$ of Sales in USD'
        }
    }, 

    series: [{
        name: 'Difference in Sales',
        data: salesColored
    }, {
        name: 'Zeros',
        data: zeroes,
        color: "#000000",
        dashStyle: 'LongDash',
        enableMouseTracking: false,
        marker: {enabled: false}
    }], 
});

zScoresColored = zScoresDiff.slice(0)
zScoresColored[33] = {y: zScoresColored[33], color:'#BF0B23', dataLabels: {enabled: true}}
// zScore Diff chart
Highcharts.chart('container3', {
    chart: {
        type: 'column',
    }, 
    title: {
        text: 'zScores of Diff in Sales per Month'
    }, 
    subtitle: {
        text: 'Jananuary 2016 to September 2019'
    }, 
    xAxis: {
        title: {
            text: 'Months - Year (20XX)'
        },
        categories: months
    }, 
    yAxis: {
        title: {
            text: '$ of Sales in USD'
        }
    }, 

    series: [{
        name: 'Difference in Sales',
        data: zScoresColored
    }, {
        name: 'Zeros',
        data: zeroes,
        color: "#000000",
        dashStyle: 'LongDash',
        enableMouseTracking: false,
        marker: {enabled: false}
    }], 
});


// Create Chart for Regional Sales 
Highcharts.chart('container4', {
    chart: {
        type: 'line',
    }, 
    title: {
        text: 'Regional Sales per Month'
    }, 
    subtitle: {
        text: 'Jananuary 2016 to September 2019'
    }, 
    xAxis: {
        title: {
            text: 'Months - Year (20XX)'
        },
        categories: months
    }, 
    yAxis: {
        title: {
            text: '$ of Sales in USD'
        }
    }, 

    series: [{
        name: 'North East sales',
        data: neSales
    }, {
        name: 'North West sales',
        data: nwSales
    }, {
        name: 'South East sales',
        data: seSales
    }, {
        name: 'South West sales',
        data: swSales
    }], 
});

// Item Sales per Region
Highcharts.chart('container5', {
    chart: {
        type: 'column',
    }, 
    title: {
        text: 'Item Sales per Region'
    }, 
    subtitle: {
        text: 'Jananuary 2016 to September 2019'
    }, 
    xAxis: {
        title: {
            text: 'Items'
        },
        categories: foods
    }, 
    yAxis: {
        title: {
            text: '$ of Sales in USD'
        }
    }, 

    series: [{
        name: 'North East',
        data: [65362334, 27233220, 16345942]
    }, {
        name: 'North West',
        data: [63572000, 26341429, 15821178]
    }, {
        name: 'South East',
        data: [62328614, 26039450, 15614539]
    }, {
        name: 'South West',
        data: [64421707, 26815953, 16104137]
    }], 
});

// Sales per day 

Highcharts.chart('container6', {
    chart: {
        type: 'pie',
    }, 
    title: {
        text: 'Total Sales per Day'
    }, 
    subtitle: {
        text: 'Jananuary 2016'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },

    series: [{
        name: 'Days',
        data: [{
            name: days[0],
            y: salesPerDay[0]
        }, {
            name: days[1],
            y: salesPerDay[1]
        }, {
            name: days[2],
            y: salesPerDay[2]
        }, {
            name: days[3],
            y: salesPerDay[3]
        }, {
            name: days[4],
            y: salesPerDay[4]
        }, {
            name: days[5],
            y: salesPerDay[5]
        }, {
            name: days[6],
            y: salesPerDay[6]
        }, ]
    }] 
});