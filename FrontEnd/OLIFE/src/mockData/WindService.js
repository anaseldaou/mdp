export var Avg_WindSpeed_Ajourdhui = 54;

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
            label: 'Vitesse du Vent cette semaine en Km/h',
            backgroundColor: 'rgba(0,0,255,0.3)',
            borderColor: 'rgba(0,0,255,0.3)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: 'black',
            pointHoverBackgroundColor: '#fff',
            data: [13,14,13,16,12,11,15],
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
          data: [55, 36, 13, 3, 10, 7, 13,10,14,26,27,35],
          fill: false,
          borderColor: '#42A5F5'
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
          data: [13, 14, 15, 12, 17, 18, 22 , 18 , 19 , 14 , 15 , 16],
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