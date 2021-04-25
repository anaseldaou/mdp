export var Avg_Rain_Aujourdhui = 30;

export var RainData_Semaine = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
      type: 'bar',
      label: 'Pluie cette semaine',
      backgroundColor: '#66BB6A',
      data: [
          25,
          18,
          37,
          45,
          49,
          37,
          12
      ],
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

export var RainData_Aujourdhui = {
  labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00','8:00', '9:00', '10:00', '11:00','12:00','13:00', '14:00', '15:00', '16:00','17:00','18:00', '19:00', '20:00', '21:00','22:00','23:00','24:00'],
  datasets: [
      {
          label: 'pluie dans les dernières 24h',
          backgroundColor: 'blue',
          data: [2.5, 1.5, 0.65, 1.8, 0.75,2.1, 1.9, 0.75, 2.6, 2.3,2.1, 1.2, 0.9, 1.1, 1.4,1.2, 1.8, 2, 2.1, 1.7,1.3, 1.2, 0.8, 0.6]
      },
  ]
};

export var RainOptions_Aujourdhui = {
  title: {
      display: true,
      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};

export var  RainData_Annee = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
],
  datasets: [
      {
          label: 'Pluie cette année',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'blue',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [ 1.2, 1.4, 1.3,0.8,0,0,0,0,0, 0.7, 0.9, 1],
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

