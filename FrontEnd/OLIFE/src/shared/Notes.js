import {getNotesData} from '../service/noteService';



var notes =[];
var key;
Promise.resolve(getNotesData())
        .then(response => { 
                            for ( key in response) 
                            {
                                notes.push(response[key]);
                            };
                            console.log(notes);
                          });
export default notes;