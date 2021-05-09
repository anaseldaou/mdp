import * as ActionTypes from './ActionTypes';

export const Wind = (state = {
    WindData_Semaine : {
        labels: [],
          datasets: [
              {
                  label: 'Vitesse du Vent cette semaine en Km/h',
                  backgroundColor: 'rgba(0,0,255,0.3)',
                  borderColor: 'rgba(0,0,255,0.3)',
                  pointBackgroundColor: 'rgba(179,181,198,1)',
                  pointBorderColor: 'black',
                  pointHoverBackgroundColor: '#fff',
                  data: [],
              },
            ]
      },
      WindData_Mois: {
        labels: [],
        datasets: [
            {
                label: 'Vitesse de Vent ce mois',
                data: [],
                fill: true,
                borderColor: '#42A5F5'
            },
        ]
      },
    WindData_Annee : {
        labels: [],
        datasets: [
            {
                label: 'First Dataset',
                data: [],
                fill: false,
                borderColor: '#42A5F5'
            }
        ]
      },
      Avg_WindSpeed_Ajourdhui : null
     }, action) => {
    switch(action.type) {
        case ActionTypes.RECEIVED_AVG_WINDSPEED_PER_SEMAINE:
            return {...state,  WindData_Semaine : {
                labels: action.days,
                  datasets: [
                      {
                          label: 'Vitesse du Vent cette semaine en Km/h',
                          backgroundColor: 'rgba(0,0,255,0.3)',
                          borderColor: 'rgba(0,0,255,0.3)',
                          pointBackgroundColor: 'rgba(179,181,198,1)',
                          pointBorderColor: 'black',
                          pointHoverBackgroundColor: '#fff',
                          data: action.data,
                      },
                    ]
              }};

        case ActionTypes.RECEIVED_AVG_WINDSPEED_MOIS:
            return {...state,WindData_Mois: {
                labels: action.days,
                datasets: [
                    {
                        label: 'Vitesse de Vent ce mois',
                        data: action.data,
                        fill: true,
                        borderColor: '#42A5F5'
                    },
                ]}}
        case ActionTypes.RECEIVED_AVG_WINDSPEED_PER_ANNEE:
            return {...state,WindData_Annee : {
                labels: action.months,
                datasets: [
                    {
                        label: 'First Dataset',
                        data: action.data,
                        fill: false,
                        borderColor: '#42A5F5'
                    }
                ]
              }}
              case ActionTypes.RECEIVED_AVG_WINDSPEED_AUJOURDHUI:
                return {...state,Avg_WindSpeed_Ajourdhui:action.data}

        default:
            return state;
    }
}