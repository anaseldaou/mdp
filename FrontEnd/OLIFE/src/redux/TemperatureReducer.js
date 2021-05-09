import * as ActionTypes from './ActionTypes';
import {temperatureLabels} from '../Labels/TemperatureLabels'


export const Temperature = (state = {
    TemperatureData_Semaine : {
                                labels: [],
                                datasets: [
                                            {
                                                label: temperatureLabels.temperature_semaine,
                                                data: [],
                                                fill: false,
                                                borderColor: 'red'
                                            }
                                          ]       
                               },
    TemperatureData_Aujourdhui: {
                                labels: [],
                                datasets: [
                                    {
                                        label: temperatureLabels.temperature_aujourdhui,
                                        data: [],
                                        fill: false,
                                        borderColor: 'blue'
                                    },
                                ]
                              },
    TemperatureData_Annee : {
                                labels: [],
                                datasets: [
                                    {
                                        label: temperatureLabels.temperature_annee,
                                        data: [],
                                        borderColor:"blue"
                                    }
                                ]
                              },
    Avg_Humidite_Derniere_heure : 0 ,
    Avg_Temperature_Derniere_heure : 0
    
    }, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVED_AVG_TEMP_PER_SEMAINE:
            return {...state,  TemperatureData_Semaine : {
                                                            labels: action.day,
                                                            datasets: [
                                                                        {
                                                                            label: temperatureLabels.temperature_semaine,
                                                                            data: action.data,
                                                                            fill: true,
                                                                            borderColor: 'red'
                                                                        }
                                                                    ]       
                                                            }};

        case ActionTypes.RECEIVED_AVG_TEMP_AUJOURDHUI:
            return {...state,TemperatureData_Aujourdhui : {
                labels: action.hours,
                datasets: [
                            {
                                label: temperatureLabels.temperature_aujourdhui,
                                data: action.data,
                                fill: false,
                                borderColor: 'blue'
                            }
                        ]       
                }}
        case ActionTypes.RECEIVED_AVG_TEMP_PER_ANNEE:
            return {...state,TemperatureData_Annee : {
                labels: action.months,
                datasets: [
                    {
                        label: temperatureLabels.temperature_annee,
                        data: action.data,
                        borderColor:"blue"
                    }
                ]
              }
            }
        case ActionTypes.RECEIVED_AVG_TEMP_DERNIERE_HEURE:
                return {...state,Avg_Temperature_Derniere_heure : action.data
                }
        case ActionTypes.RECEIVED_AVG_HUMIDITE_DERNIERE_HEURE:
                    return {...state,Avg_Humidite_Derniere_heure : action.data
                    }

        default:
            return state;
    }
}