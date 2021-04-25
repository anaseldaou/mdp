
import { baseUrl } from 'C:/Users/win10/Desktop/mdp/FrontEnd/OLIFE/src/shared/baseUrl.js';

export function getTemperatureData(echelle) 
{

    return fetch(baseUrl+'parameter/Temperature/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)    
};