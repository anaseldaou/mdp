import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
var  monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export const fetchAvgCO2PerSemaine = (parameter,echelle) => (dispatch) => {
    var days = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'CO2/perDay/7')
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
            dispatch(receivedAvgCO2Semaine(data,days));
            console.log("AVG_CO2_PER_SEMAINE IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}



export const receivedAvgCO2Semaine = (data,days) => ({
    type: ActionTypes.RECEIVED_AVG_CO2_PER_SEMAINE,
    data: data,
    days:days
});



export const fetchAvgSO2PerSemaine = (parameter,echelle) => (dispatch) => {
    var days = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'CO2/perDay/7')
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
            dispatch(receivedAvgSO2Semaine(data,days));
            console.log("AVG_SO2_PER_SEMAINE IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}



export const receivedAvgSO2Semaine = (data,days) => ({
    type: ActionTypes.RECEIVED_AVG_SO2_PER_SEMAINE,
    data: data,
    days:days
});



export const fetchAvgCO2PerAnnee = (parameter,echelle) => (dispatch) => {
    var months = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)
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
            dispatch(receivedAvgCO2PerAnnee(data,months));
            console.log("AVG_CO2_PER_ANNEE IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}


export const receivedAvgCO2PerAnnee = (data,months) => ({
    type: ActionTypes.RECEIVED_AVG_CO2_PER_ANNEE,
    data: data,
    months:months
});

export const fetchAvgSO2PerAnnee = (parameter,echelle) => (dispatch) => {
    var months = [];
    var data = [];
    var key;
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)
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
            dispatch(receivedAvgSO2PerAnnee(data,months));
            console.log("AVG_SO2_PER_ANNEE IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}


export const receivedAvgSO2PerAnnee = (data,months) => ({
    type: ActionTypes.RECEIVED_AVG_SO2_PER_ANNEE,
    data: data,
    months:months
});



export const fetchAvgPPMPerSemaine = (parameter,echelle) => (dispatch) => {
    var key;
    var data=[];
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'CO2/perDay/7')
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
            data.push(listOfJSON[key].avg_PPM1);
            data.push(listOfJSON[key].avg_PPM2_5);
            data.push(listOfJSON[key].avg_PPM4);
            data.push(listOfJSON[key].avg_PPM10);
            }
            dispatch(receivedAvgPPMSemaine(data));
            console.log("AVG_PPM_PER_SEMAINE IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}



export const receivedAvgPPMSemaine = (data,days) => ({
    type: ActionTypes.RECEIVED_AVG_PPM_PER_SEMAINE,
    data: data,
});

export const fetchAvgPPMPerMois = (parameter,echelle) => (dispatch) => {
    var key;
    var data = [];
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'CO2/perDay/7')
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
            data.push(listOfJSON[key].avg_PPM1);
            data.push(listOfJSON[key].avg_PPM2_5);
            data.push(listOfJSON[key].avg_PPM4);
            data.push(listOfJSON[key].avg_PPM10);
            }
            dispatch(receivedAvgPPMMois(data));
            console.log("AVG_PPM_PER_MOIS IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}


export const receivedAvgPPMMois = (data) => ({
    type: ActionTypes.RECEIVED_AVG_PPM_MOIS,
    data: data,
});


export const fetchAvgPPMDernierHeure = (parameter,echelle) => (dispatch) => {
    var key;
    var data = [];
    return fetch(baseUrl+'parameter/'+parameter+'/'+echelle)  //fetch(baseUrl+'CO2/perDay/7')
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
            data.push(listOfJSON[key].avg_PPM1);
            data.push(listOfJSON[key].avg_PPM2_5);
            data.push(listOfJSON[key].avg_PPM10);
            }
            dispatch(receivedAvgPPMDerniereHeure(data));
            console.log("RECEIVED_AVG_PPM_DERNIERE_HOUR IS " + data)            
        })
        .catch(error => dispatch(requestFailed(error.message)));
}



export const receivedAvgPPMDerniereHeure = (data) => ({
    type: ActionTypes.RECEIVED_AVG_PPM_DERNIERE_HOUR,
    data: data,
});





export const requestFailed = (errmess) => ({
    type: ActionTypes.REQUEST_PLUVIO_FAILED,
    payload: errmess
});