import {getPluvioData} from '../service/pluvioService';
export var Avg_Rain_Aujourdhui = 560;

var key;

var  monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var dataPerHour = [];
var lastTwentyFourHour =[];

  Promise.resolve(getPluvioData("perHour"))
        .then(response => { 
                            for ( key in response) 
                            {
                                lastTwentyFourHour.push(response[key].hour+':00');
                                dataPerHour.push(response[key].avg);
                            };
                          });

export const PluvioDataPerHour = {
    labels: lastTwentyFourHour.reverse(),
    datasets: [
        {
            label: 'Temperature Today',
            backgroundColor: '#42A5F5',
            data: dataPerHour,
            borderColor:"red",
            fill:true,
        },
        {
            label: 'Avg Temperature Today',
            borderColor:"blue",
            data: dataPerHour,
            fill:true
        }
    ]
  };

  export var RainData_Aujourdhui = {
    labels: lastTwentyFourHour,
    datasets: [
        {
            label: 'Rain Data Today',
            backgroundColor: 'blue',
            data: dataPerHour
        },
    ]
  };
  
  export var RainOptions_Aujourdhui = {
    title: {
        display: true,
        text: 'Rain in the last 24h',
        fontSize: 16
    },
    legend: {
        position: 'top'
    }
  };




var dataPerDay = [];
var lastSevenDay =[];

getPluvioData("perDay")
        .then(response => { 
                            for ( key in response) 
                            {
                                lastSevenDay.push(days[new Date(response[key].year,response[key].month,response[key].day).getDay()]);
                                dataPerDay.push(response[key].avg)
                            };
                          });

export const PluvioDataPerDay = {
    labels: lastSevenDay,
    datasets: [
        {
            label: 'Temperature Today',
            backgroundColor: '#42A5F5',
            data: dataPerDay,
            borderColor:"red",
            fill:true,
        },
        {
            label: 'Avg Temperature Today',
            borderColor:"blue",
            data: dataPerDay,
            fill:true
        }
    ]
  };

  export var RainData_Semaine = {
    labels: lastSevenDay,
    datasets: [{
        type: 'bar',
        label: 'Rain Data cette semaine',
        backgroundColor: '#66BB6A',
        data: dataPerDay,
        borderColor: 'white',
        borderWidth: 2
    }]
  };
  
  export var RainOptions_Semaine = {
    legend: {
        labels: {
            fontColor: '#495057'
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }],
        yAxes: [{
            ticks: {
                fontColor: '#495057'
            }
        }]
    }
  };







var dataPerWeek = [];
var lastSevenWeek =[];

getPluvioData("perWeek")
        .then(response => { 
                            for ( key in response) 
                            {
                                lastSevenWeek.push(response[key].hour);
                                dataPerWeek.push(response[key].avg)
                            };
                          });

export const PluvioDataPerWeek = {
    labels: lastSevenWeek,
    datasets: [
        {
            label: 'Temperature Today',
            backgroundColor: '#42A5F5',
            data: dataPerWeek,
            borderColor:"red",
            fill:true,
        },
        {
            label: 'Avg Temperature Today',
            borderColor:"blue",
            data: dataPerWeek,
            fill:true
        }
    ]
  };

var dataPerMonth = [];
var months =[];

getPluvioData("perMonth")
        .then(response => { 
                            for ( key in response) 
                            {
                                dataPerMonth.push(monthsOfYear[response[key].month-1]); // monthsOfYear[response[key].month-1] => convertir mois de chiffre en String
                                months.push(response[key].avg)
                            };
                            console.log(dataPerMonth);
                          });

export const PluvioDataPerMonth = {
    labels: months,
    datasets: [
        {
            label: 'Temperature Today',
            backgroundColor: '#42A5F5',
            data: dataPerMonth,
            borderColor:"red",
            fill:true,
        },
        {
            label: 'Avg Temperature Today',
            borderColor:"blue",
            data: dataPerMonth,
            fill:true
        }
    ]
  };



  export var  RainData_Annee = {
    labels: months,
    datasets: [
        {
            label: 'Rain Data Last Year',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'blue',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: dataPerMonth,
        },
  
    ]
  };
  
  export var RainOptions_Annee = {
    legend: {
        labels: {
            fontColor: 'black'
        }
    },
    scale: {
        pointLabels: {
            fontColor: 'red'
        },
        gridLines: {
            color: 'green'
        }
    }
  };

var dataPerYear = [];
var lastTenYear =[];

getPluvioData("perYear")
        .then(response => { 
                            for ( key in response) 
                            {
                                lastTenYear.push(response[key].year);
                                dataPerYear.push(response[key].avg)
                            };
                          });

export const PluvioDataPerYear = {
    labels: lastTenYear,
    datasets: [
        {
            label: 'Temperature Today',
            backgroundColor: '#42A5F5',
            data: dataPerYear,
            borderColor:"red",
            fill:true,
        },
        {
            label: 'Avg Temperature Today',
            borderColor:"blue",
            data: dataPerYear,
            fill:true
        }
    ]
  };