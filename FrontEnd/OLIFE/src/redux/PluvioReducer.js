import * as ActionTypes from './ActionTypes';
import {temperatureLabels} from '../Labels/TemperatureLabels'


export const Pluvio = (state = {
    RainData_Semaine : {
        labels: [],
        datasets: [{
            type: 'bar',
            label: 'Pluie cette semaine',
            backgroundColor: '#66BB6A',
            data: [],
            borderColor: 'white',
            borderWidth: 2
        }]
      },
    RainData_Aujourdhui: {
        labels: [],
        datasets: [
            {
                label: 'pluie dans les dernières 24h',
                backgroundColor: 'blue',
                data: []
            },
        ]
      },
    RainData_Annee : {
        labels: [],
        datasets: [
            {
                label: 'Pluie cette année',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'blue',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [],
            },
        ]
      }
    
    }, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVED_AVG_PLUVIO_PER_SEMAINE:
            return {...state,  RainData_Semaine: {
                labels: action.hours,
                datasets: [
                    {
                        label: 'pluie dans les dernières 24h',
                        backgroundColor: 'blue',
                        data: action.data
                    },
                ]
              }}

        case ActionTypes.RECEIVED_AVG_PLUVIO_AUJOURDHUI:
            return {...state,RainData_Aujourdhui: {
                labels: action.hours,
                datasets: [
                    {
                        label: 'pluie dans les dernières 24h',
                        backgroundColor: 'blue',
                        data: action.data
                    },
                ]
              }}
        case ActionTypes.RECEIVED_AVG_PLUVIO_PER_ANNEE:
            return {...state,RainData_Annee : {
                labels: action.months,
                datasets: [
                    {
                        label: 'Pluie cette année',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'blue',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: action.data,
                    },
                ]
              }
            }

        default:
            return state;
    }
}