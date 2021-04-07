import {getPluvioData} from '../service/pluvioService';

var key;
var labels = [];
var data =[];

Promise.resolve(getPluvioData("perMonth"))
        .then(response => { 
                            for ( key in response) 
                            {
                                labels.push(response[key].month);
                                data.push(response[key].avg)
                            };
                          });

export const basicData = {
    labels: labels,
    datasets: [
        {
            label: 'Temperature Today',
            backgroundColor: '#42A5F5',
            data: data,
            borderColor:"red",
            fill:true,
        },
        {
            label: 'Avg Temperature Today',
            borderColor:"blue",
            data: data,
            fill:true
        }
    ]
  };

