import { getNodeText } from '@testing-library/dom';
import { baseUrl } from 'C:/Users/win10/Desktop/mdp/FrontEnd/OLIFE/src/shared/baseUrl.js';

export function getNotesData() 
{
    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl+'users/notes',{
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)
    .catch(error => error);    
};


export function postNotesData(note) 
{
    const bearer = 'Bearer ' + localStorage.getItem('token');
    console.log(note);
    return fetch(baseUrl+'users/notes',
    {
        method: "POST",
        body: JSON.stringify({ note:note}),
        headers:{
          "Content-Type": "application/json",
          'Authorization': bearer
        }
    })
    .then(response => response.json(),
        error => {
            throw error;
        })
    .then(response=> response)
    .catch(error => error);    
};