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