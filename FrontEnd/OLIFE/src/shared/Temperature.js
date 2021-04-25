import {temperatureLabels} from '../Labels/TemperatureLabels'
import {parseResponseDay , parsePromiseDay} from '../service/methode';
import {getTemperatureData} from '../service/TemperatureService';
import {getData} from '../service/getData';

//export var Avg_Temperature_Aujourdui =  parsePromiseDay(getData("Temperature","perDay/1"))[1][0];
export var Avg_Humidite_Aujourdui =89;

//Annee
export var TemperatureData_Annee = {
  labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'],
  datasets: [
      {
          label: temperatureLabels.temperature_annee,
          data: [13,23,12,32,33,27,36,32,25,17,16,12],
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
          data: [65, 59, 80, 81, 56, 55, 40],
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
  labels: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00','7:00','8:00', '9:00', '10:00', '11:00','12:00','13:00', '14:00', '15:00', '16:00','17:00','18:00', '19:00', '20:00', '21:00','22:00','23:00','24:00'],
  datasets: [
      {
          label: temperatureLabels.temperature_aujourdhui,
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'blue'
      },
  ]
};

export var TemperatureOptions_Aujourdhui= {
  title: {
      display: true,
      text: temperatureLabels.temperature_aujourdhui,
      fontSize: 16
  },
  legend: {
      position: 'top'
  }
};
