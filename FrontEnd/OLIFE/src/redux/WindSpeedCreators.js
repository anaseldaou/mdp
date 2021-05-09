import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
var  monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export const fetchAvgWindSpeedPerSemaine = (parameter,echelle) => (dispatch) => {
    var days = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'WindSpeed/perDay/7')
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
            dispatch(receivedAvgWindSpeedSemaine(data,days));
            console.log("AVG_WindSpeed_PER_SEMAINE IS " + data)            
        })
        .catch(error => dispatch(requestWindSpeedFailed(error.message)));
}



export const receivedAvgWindSpeedSemaine = (data,days) => ({
    type: ActionTypes.RECEIVED_AVG_WINDSPEED_PER_SEMAINE,
    data: data,
    days:days
});


export const fetchAvgWindSpeedPerMonth = (parameter,echelle) => (dispatch) => {
    var days = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'WindSpeederature/perHour/7')
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
            days.push(listOfJSON[key].day+'/'+listOfJSON[key].month);
            data.push(listOfJSON[key].avg);
            }
            dispatch(receivedAvgWindSpeedPerMonth(data,days));
            console.log("AVG_WindSpeed_MOIS IS " + data)    
            console.log("DAYS_WindSpeed_MOIS IS " + days)         
        })
        .catch(error => dispatch(requestWindSpeedFailed(error.message)));
}


export const receivedAvgWindSpeedPerMonth = (data,days) => ({
    type: ActionTypes.RECEIVED_AVG_WINDSPEED_MOIS,
    data: data,
    days:days
});


export const fetchAvgWindSpeedPerAnnee = (parameter,echelle) => (dispatch) => {
    var months = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'WindSpeed/perHour/7')
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
                months.push(monthsOfYear[listOfJSON[key].month-1]);
                data.push(listOfJSON[key].avg);
            }
            dispatch(receivedAvgWindSpeedPerAnnee(data,months));
            console.log("AVG_WindSpeed_PER_ANNEE IS " + data)
            console.log("MONTHS_WindSpeed_PER_ANNEE IS " + data)              
        })
        .catch(error => dispatch(requestWindSpeedFailed(error.message)));
}


export const receivedAvgWindSpeedPerAnnee = (data,months) => ({
    type: ActionTypes.RECEIVED_AVG_WINDSPEED_PER_ANNEE,
    data: data,
    months:months
});



export const fetchAvgWindSpeedAujourdhui = (parameter,echelle) => (dispatch) => {
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'WindSpeed/perHour/7')
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
                data.push(listOfJSON[key].avg);
            }
            dispatch(receivedAvgWindSpeedAujourdhui(data[0])); //une seule valeure la liste
            console.log("AVG_WindSpeed_AUJOURDHUI IS " + data)      
        })
        .catch(error => dispatch(requestWindSpeedFailed(error.message)));
}


export const receivedAvgWindSpeedAujourdhui = (data) => ({
    type: ActionTypes.RECEIVED_AVG_WINDSPEED_AUJOURDHUI,
    data: data
});

export const requestWindSpeedFailed = (errmess) => ({
    type: ActionTypes.REQUEST_WINDSPEED_FAILED,
    payload: errmess
});