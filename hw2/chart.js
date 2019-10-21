
// Create Chart for all Sales per Month 
Highcharts.chart('container6', {
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


// Diff chart
Highcharts.chart('container7', {
    chart: {
        type: 'line',
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
        name: 'Total Sales',
        data: salesPerMonthDiff
    }, {
        data: zeroes,
        color: "#000000",
        dashStyle: 'LongDash',
        enableMouseTracking: false,
        marker: {enabled: false}
    }], 
});

// zScore Diff chart
Highcharts.chart('container8', {
    chart: {
        type: 'line',
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
        name: 'Total Sales',
        data: zScoresDiff
    }, {
        data: zeroes,
        color: "#000000",
        dashStyle: 'LongDash',
        enableMouseTracking: false,
        marker: {enabled: false}
    }], 
});


// Create Chart for all North East Sales
Highcharts.chart('container1', {
    chart: {
        type: 'line',
    }, 
    title: {
        text: 'Monthly Sales In North East'
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
        name: 'Hamburgers',
        data: hmNE
    }, {
        name: 'Chicken fillets',
        data: cfNE
    }, {
        name: 'Fish fillets',
        data: ffNE
    }], 
});


// Chart for all North West Sales 
Highcharts.chart('container2', {
    chart: {
        type: 'line',
    }, 
    title: {
        text: 'Monthly Sales In North West'
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
        name: 'Hamburgers',
        data: hmNW
    }, {
        name: 'Chicken fillets',
        data: cfNW
    }, {
        name: 'Fish fillets',
        data: ffNW
    }], 
});

// Create Chart for all South East Sales
Highcharts.chart('container3', {
    chart: {
        type: 'line',
    }, 
    title: {
        text: 'Monthly Sales In South East'
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
        name: 'Hamburgers',
        data: hmSE
    }, {
        name: 'Chicken fillets',
        data: cfSE
    }, {
        name: 'Fish fillets',
        data: ffSE
    }], 
});

// Create Chart for all South West Sales
Highcharts.chart('container4', {
    chart: {
        type: 'line',
    }, 
    title: {
        text: 'Monthly Sales In South West'
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
        name: 'Hamburgers',
        data: hmSW
    }, {
        name: 'Chicken fillets',
        data: cfSW
    }, {
        name: 'Fish fillets',
        data: ffSW
    }], 
});

// Create Chart for all Central Sales
Highcharts.chart('container5', {
    chart: {
        type: 'line',
    }, 
    title: {
        text: 'Monthly Sales In Central'
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
        name: 'Hamburgers',
        data: hmC
    }, {
        name: 'Chicken fillets',
        data: cfC
    }, {
        name: 'Fish fillets',
        data: ffC
    }], 
});