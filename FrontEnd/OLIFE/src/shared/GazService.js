//particule de micron
export var particule_1_micron_aujourdhui = 13;
export var particule_2_5_micron_aujourdhui = 28
export var particule_10_micron_aujourdhui = 12

export var Avg_Co2_Aujourdhui = 42;
export var Avg_So2_Aujourdhui = 28;
export var Avg_No2_Aujourdhui = 32;



//Semaine
export var GazData_Semaine = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  datasets: [
      {
          label: "CO2",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: '#42A5F5',
      },
      {
          label:"SO2",
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: '#66BB6A',
      },
      {
        label: "NO2",
        data: [24, 56, 12, 12, 3, 67, 12],
        backgroundColor: '#FFA726',
    },
  ]
};

export var GazOptions_Semaine = {
  title: {
      display: true,
      text: "Gaz data cette semaine",
      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};

export var GazData_Last_30_Days = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  datasets: [
      {
          label: "CO2",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: '#42A5F5',
      },
      {
          label:"SO2",
          backgroundColor: '#66BB6A',
          data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        label: "NO2",
        backgroundColor: '#FFA726',
        data: [24, 56, 12, 12, 3, 67, 12],
    },
  ]
}

export var GazOptions_Last_30_Days = {
  title: {
      display: true,
      text: "Gaz data derniers 30 jours",
      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};



export var GazOptions_Derniers_12_Mois = {
  tooltips: {
      mode: 'index',
      intersect: false
  },
  responsive: true,
  scales: {
      xAxes: [{
          stacked: true,
          ticks: {
              fontColor: '#495057'
          },
          gridLines: {
              color: '#ebedef'
          }
      }],
      yAxes: [{
          stacked: true,
          ticks: {
              fontColor: '#495057'
          },
          gridLines: {
              color: '#ebedef'
          }
      }]
  },
  legend: {
      labels: {
          fontColor: '#495057'
      }
  }
};

export var GazData_Derniers_12_Mois = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
  datasets: [{
      type: 'bar',
      label: 'CO2',
      backgroundColor: '#42A5F5',
      data: [
          50,
          25,
          12,
          48,
          90,
          76,
          42
      ]
  }, {
      type: 'bar',
      label: 'SO2',
      backgroundColor: '#66BB6A',
      data: [
          21,
          84,
          24,
          75,
          37,
          65,
          34
      ]
  }, {
      type: 'bar',
      label: 'NO2',
      backgroundColor: '#FFA726',
      data: [
          41,
          52,
          24,
          74,
          23,
          21,
          32
      ]
  }]
};


export var GazData_Particule_Micron_Semaine = {
  labels: ['Particule 1 micron', 'Particule 1.5 micron', 'Particule 2.5 micron'],
  datasets: [
      {
          data: [300, 50, 100],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ]
      }]
};

export var GazOptions_Particule_Micron_Semaine = {
  legend: {
      labels: {
          fontColor: '#495057'
      }
  }
};

export var GazData_Particule_Micron_Mois = {
  labels: ['Particule 1 micron', 'Particule 1.5 micron', 'Particule 2.5 micron'],
  datasets: [
      {
          data: [127, 117, 21],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
          ]
      }]
};

export var GazOptions_Particule_Micron_Mois = {
  legend: {
      labels: {
          fontColor: '#495057'
      }
  }
};
