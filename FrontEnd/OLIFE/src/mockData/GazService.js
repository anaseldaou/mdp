//particule de micron
export var particule_1_micron_aujourdhui = 13;
export var particule_2_5_micron_aujourdhui = 28
export var particule_10_micron_aujourdhui = 12

export var Avg_Co2_Aujourdhui = 350;
export var Avg_So2_Aujourdhui = 0.9;
export var Avg_No2_Aujourdhui = 32;



//Semaine
export var CO2Data_Semaine = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  datasets: [
      {
          label: "CO2",
          data: [405, 417, 411, 420, 403, 411, 419],
          backgroundColor: '#42A5F5',
      }
  ]
};

export var SO2Data_Semaine = {
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    datasets: [
        {
            label:"SO2",
            data: [0.2, 0.21, 0.16, 0.19, 0.18, 0.9, 1.2],
            backgroundColor: '#66BB6A',
        }
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

export var CO2Data_Cette_Annee = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre',
  'Novembre','Decembre'],
  datasets: [
      {
          label: "CO2",
          data: [402, 411, 409, 402, 415, 417, 402 ,398,404 ,412,408,397],
          backgroundColor: '#42A5F5',
      }
  ]
}

export var SO2Data_Cette_Annee = {
    labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet','Aout','Septembre','Octobre',
'Novembre','Decembre'],
    datasets: [

        {
            label:"SO2",
            backgroundColor: '#66BB6A',
            data: [0.3, 0.5, 0.9, 1.4, 2.1, 2.5, 1.7 , 1.5 , 1.1 ,0.8 , 2.3 , 2.7],
        }
    ]
  }

export var CO2Options_Cette_Annee = {
  title: {
      display: true,
      text: "CO2 derniers 30 jours",
      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};

export var SO2Options_Cette_Annee = {
    title: {
        display: true,
        text: "SO2 derniers 30 jours",
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
  labels: ['Particule 1 micron', 'Particule 2.5 micron', 'Particule 4 micron', 'Particule 10 micron'],
  datasets: [
      {
          data: [16, 21, 22 , 19],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#09F42C"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#09F42C"
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
  labels: ['Particule 1 micron', 'Particule 2.5 micron', 'Particule 4 micron', 'Particule 10 micron'],
  datasets: [
      {
          data: [22, 19, 24 , 16],
          backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#28a745"
          ],
          hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#28a745"
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
