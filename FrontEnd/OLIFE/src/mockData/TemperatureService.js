import {temperatureLabels} from '../Labels/TemperatureLabels'

export var Avg_Temperature_Aujourdui =  28;
export var Avg_Humidite_Aujourdui =54;

//Annee
export var TemperatureData_Annee = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
  datasets: [
      {
          label: temperatureLabels.temperature_annee,
          data: [13,8,12,21,24,28,29,33,29,27,22,17],
          borderColor:"blue"
      }
  ]
};

export var TemperatureOptions_Annee = {
  title: {
      display: true,
      text: temperatureLabels.temperature_annee,
      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};

//Semaine
export var TemperatureData_Semaine = {
  labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
  datasets: [
      {
          label: temperatureLabels.temperature_semaine,
          data: [17, 18, 15, 16, 14, 15, 15],
          fill: false,
          borderColor: 'red'
      },
  ]
};

export var TemperatureOptions_Semaine = {
  title: {
      display: true,
      text: temperatureLabels.temperature_semaine,
      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};

//Aujourdhui
export var TemperatureData_Aujourdhui= {
  labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00','8:00', '9:00', '10:00', '11:00','12:00','13:00', '14:00', '15:00', '16:00','17:00','18:00', '19:00', '20:00', '21:00','22:00','23:00'],
  datasets: [
      {
          label: temperatureLabels.temperature_aujourdhui,
          data: [14, 14, 14, 14, 15, 15, 16,18,18,19,19,20,21,21,21,20,20,18,18,16,16,16,15,14],
          fill: false,
          borderColor: 'blue'
      },
  ]
};

export var TemperatureOptions_Aujourdhui= {
  title: {
      display: true,

      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};
