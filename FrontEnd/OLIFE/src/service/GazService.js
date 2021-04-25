
import { baseUrl } from 'C:/Users/win10/Desktop/mdp/FrontEnd/OLIFE/src/shared/baseUrl.js';

export function getCO2Data(echelle) 
{

    return fetch(baseUrl+'parameter/CO2/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)    
};
export function getSO2Data(echelle)
{

    return fetch(baseUrl+'parameter/SO2/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)
};