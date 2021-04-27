import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
var  monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export const fetchAvgTempPerSemaine = (parameter,echelle) => (dispatch) => {
    var days = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'Temperature/perDay/7')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(listOfJSON => {
            
            for (key in listOfJSON)
            {
            days.push(daysOfWeek[new Date(listOfJSON[key].year,listOfJSON[key].month,listOfJSON[key].day).getDay()]);
            data.push(listOfJSON[key].avg);
            }
            dispatch(receivedAvgTempSemaine(data,days));
            console.log("AVG_TEMP_PER_SEMAINE IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}



export const receivedAvgTempSemaine = (data,days) => ({
    type: ActionTypes.RECEIVED_AVG_TEMP_PER_SEMAINE,
    data: data,
    day:days
});


export const fetchAvgTempAujourdhui = (parameter,echelle) => (dispatch) => {
    var hours = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'Temperature/perHour/7')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(listOfJSON => {
            
            for (key in listOfJSON)
            {
            hours.push(listOfJSON[key].hour+':00');
            data.push(listOfJSON[key].avg);
            }
            dispatch(receivedAvgTempAujourdhui(data,hours));
            console.log("AVG_TEMP_AUJOURDHUI IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}


export const receivedAvgTempAujourdhui = (data,hours) => ({
    type: ActionTypes.RECEIVED_AVG_TEMP_AUJOURDHUI,
    data: data,
    hours:hours
});

export const requestFailed = (errmess) => ({
    type: ActionTypes.REQUEST_FAILED,
    payload: errmess
});