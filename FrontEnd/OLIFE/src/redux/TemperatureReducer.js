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
                              }
    
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
                                label: temperatureLabels.temperature_semaine,
                                data: action.data,
                                fill: false,
                                borderColor: 'blue'
                            }
                        ]       
                }}

        default:
            return state;
    }
}