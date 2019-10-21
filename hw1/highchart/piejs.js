// data 
var series = [{
    name: 'applications in 2018',
    colorByPoint: true,
    data: [{
        name: 'fulltime_men_applied in 2018',
        y: 45636,
        sliced: true
    }, {
        name: 'fulltime_women_applied in 2018',
        y: 52265
    }]
}];


// graph stuff 
var title = {
   text: 'Pie Chart'   
};
var subtitle = {
   text: 'Save me'
};

var tooltip = {
    pointFormat: '{series.name}'
}
var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
};

var plotOptions = {
    pie: {
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
}

// make it pie chart 
var chart = {
    type: 'pie'
};

// argument holder 
var json = {};

json.title = title;
json.subtitle = subtitle;
json.tooltip = tooltip;
json.legend = legend;
json.chart = chart;
json.series = series;
json.plotOptions = plotOptions

var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);