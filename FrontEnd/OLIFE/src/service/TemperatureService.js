import { baseUrl } from '../shared/baseUrl.js';

export function getTemperatureData(echelle) 
{

    return fetch(baseUrl+'parameter/Temperature/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)    
};