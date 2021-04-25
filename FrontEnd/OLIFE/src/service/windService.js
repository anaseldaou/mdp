
import { baseUrl } from 'C:/Users/win10/Desktop/mdp/FrontEnd/OLIFE/src/shared/baseUrl.js';

export function getWindDirData(echelle) 
{

    return fetch(baseUrl+'parameter/WindDir/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)    
};


export function getWindSpeedData(echelle) 
{

    return fetch(baseUrl+'parameter/WindSpeed/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)    
};