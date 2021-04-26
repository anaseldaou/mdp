import { baseUrl } from '../shared/baseUrl.js';

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