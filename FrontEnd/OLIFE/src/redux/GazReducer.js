import * as ActionTypes from './ActionTypes';


export const Gaz = (state = {
    CO2Data_Semaine : {
        labels: [],
        datasets: [
            {
                label: "CO2",
                data: [],
                backgroundColor: '#42A5F5',
            }
        ]
      },
      SO2Data_Semaine : {
        labels: [],
        datasets: [
            {
                label:"SO2",
                data: [],
                backgroundColor: '#66BB6A',
            }
        ]
      },
      CO2Data_Cette_Annee : {
        labels: [],
        datasets: [
            {
                label: "CO2",
                data: [],
                backgroundColor: '#42A5F5',
            }
        ]
      },
      SO2Data_Cette_Annee : {
        labels: [],
        datasets: [
    
            {
                label:"SO2",
                backgroundColor: '#66BB6A',
                data: [],
            }
        ]
      },
      GazData_Particule_Micron_Semaine : {
        labels: ['Particule 1 micron', 'Particule 2.5 micron', 'Particule 4 micron', 'Particule 10 micron'],
        datasets: [
            {
                data: [],
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
      },
      GazData_Particule_Micron_Mois : {
        labels: ['Particule 1 micron', 'Particule 2.5 micron', 'Particule 4 micron', 'Particule 10 micron'],
        datasets: [
            {
                data: [],
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
      },
      particule_1_micron_aujourdhui:0
      ,
      particule_2_5_micron_aujourdhui:0
      ,
      particule_10_micron_aujourdhui:0
    
    }, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVED_AVG_CO2_PER_SEMAINE:
            return {...state,  CO2Data_Semaine : {
                labels: action.days,
                datasets: [
                    {
                        label: "CO2",
                        data: action.data,
                        backgroundColor: '#42A5F5',
                    }
                ]
              }}
        case ActionTypes.RECEIVED_AVG_SO2_PER_SEMAINE:
                return {...state,  SO2Data_Semaine : {
                    labels: action.days,
                    datasets: [
                        {
                            label:"SO2",
                            data: action.data,
                            backgroundColor: '#66BB6A',
                        }
                    ]
                  }}
        case ActionTypes.RECEIVED_AVG_CO2_PER_ANNEE:
            return {...state,CO2Data_Cette_Annee : {
                labels: action.months,
                datasets: [
                    {
                        label: "CO2",
                        data: action.data,
                        backgroundColor: '#42A5F5',
                    }
                ]
              }
            }
        case ActionTypes.RECEIVED_AVG_SO2_PER_ANNEE:
                return {...state,SO2Data_Cette_Annee : {
                    labels: action.months,
                    datasets: [
                
                        {
                            label:"SO2",
                            backgroundColor: '#66BB6A',
                            data: action.data,
                        }
                    ]
                  
                }}
        case ActionTypes.RECEIVED_AVG_PPM_MOIS:
                    return {...state,GazData_Particule_Micron_Semaine : {
                        labels: ['Particule 1 micron', 'Particule 2.5 micron', 'Particule 4 micron', 'Particule 10 micron'],
                        datasets: [
                            {
                                data: action.data,
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
                      }
                    }
        case ActionTypes.RECEIVED_AVG_PPM_PER_SEMAINE:
                        return {...state,GazData_Particule_Micron_Mois : {
                            labels: ['Particule 1 micron', 'Particule 2.5 micron', 'Particule 4 micron', 'Particule 10 micron'],
                            datasets: [
                                {
                                    data: action.data,
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
                          }
                        }
        case ActionTypes.RECEIVED_AVG_PPM_DERNIERE_HOUR:
            return {...state,particule_1_micron_aujourdhui:action.data[0],particule_2_5_micron_aujourdhui:action.data[1],
                particule_10_micron_aujourdhui:action.data[2]
            }

        default:
            return state;
    }
}