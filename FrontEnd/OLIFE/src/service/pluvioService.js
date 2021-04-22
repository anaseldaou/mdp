import { getNodeText } from '@testing-library/dom';
import { baseUrl } from 'C:/Users/win10/Desktop/mdp/FrontEnd/OLIFE/src/shared/baseUrl.js';

export function getPluvioData(echelle) 
{

    return fetch(baseUrl+'parameter/Pluvio/'+echelle)
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)    
};