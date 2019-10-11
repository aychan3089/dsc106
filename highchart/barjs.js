// data 
var series = [{
    name: 'fulltime_men_applied',
    data: [18147, 19838, 20566, 21590, 21725, 22332, 25097, 28758, 
    31992, 34618, 37009, 39779, 41583, 45636]
}, {
    name: 'fulltime_women_applied',
    data: [22371, 23748, 24507, 25775, 25321, 25761, 28351, 32049, 
    35408, 38822, 41047, 44430, 46845, 52265]
}];


// graph stuff 
var title = {
   text: 'Bar Chart'   
};
var subtitle = {
   text: 'Save me'
};
var xAxis = {
    categories: [2005, 2006, 2007, 2008, 2009, 2010,
       2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018]
};
var yAxis = {
    title: {
       text: 'num of people'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }], 
    labels: {
        overflow: 'justify'
    }
};  
var tooltip = {
    valueSuffix: ' people'
}
var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
};

// make it bar chart 
var chart = {
    type: 'bar'
};

// argument holder 
var json = {};

json.title = title;
json.subtitle = subtitle;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.tooltip = tooltip;
json.legend = legend;
json.chart = chart;
json.series = series;

var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);