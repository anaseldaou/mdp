import { baseUrl } from '../shared/baseUrl.js';

export function getData(parameter,echelle) 
{

    return fetch(baseUrl+'parameter/'+parameter+ '/' + echelle).then(response => response.json(),
    error => {
        throw error;
    });
};