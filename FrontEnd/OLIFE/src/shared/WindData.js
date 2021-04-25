import {parseResponseDay} from '../service/methode';
import {getWindSpeedData} from '../service/windService';

export var Avg_WindSpeed_Ajourdhui = parseResponseDay(getWindSpeedData("perDay/1"))[0];

var  monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]



export var WindData_Semaine = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
],
    datasets: [
        {
            label: 'Wind data cette semaine',
            backgroundColor: 'rgba(0,0,255,0.3)',
            borderColor: 'rgba(0,0,255,0.3)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: 'black',
            pointHoverBackgroundColor: '#fff',
            data: [52,45,56,45,65,45,18],
        },
      ]
};

export var WindOptions_Semaine = {
  legend: {
            labels: {
                fontColor: '#495057'
            }
        },
        scale: {
            pointLabels: {
                fontColor: '#495057'
            },
            gridLines: {
                color: '#ebedef'
            }
        }
};

export var WindData_Annee = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5'
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726'
      }
  ]
};

export var WindOptions_Annee = {
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
}

export var WindData_Mois = {
  labels: ['1/15', '1/16', '1/17', '1/18', '1/19', '1/20','1/21','1/22','1/23','1/24','1/25','1/26'],
  datasets: [
      {
          label: 'Vitesse de Vent ce mois',
          data: [31, 34, 35, 45, 42, 31, 26],
          fill: true,
          borderColor: '#42A5F5'
      },
  ]
};

export var WindOptions_Mois = {
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
}