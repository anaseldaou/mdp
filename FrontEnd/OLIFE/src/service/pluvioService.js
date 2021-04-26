import { baseUrl } from '../shared/baseUrl.js';

export function getPluvioData(echelle) 
{

    return fetch(baseUrl+'parameter/Pluvio/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)    
};