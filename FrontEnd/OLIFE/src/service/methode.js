var  monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

export function parseResponseDay(response)
{
    var day = [];
    var data = [];
    var key;
    for ( key in response) 
    {
        day.push(days[new Date(response[key].year,response[key].month,response[key].day).getDay()]);
        data.push(response[key].avg)
    };
    console.log(data);
    console.log(day);
    return day,data;
}

export function parseResponseMonth(response)
{
    var months = [];
    var data = [];
    var key;
    for ( key in response) 
    {
        months.push(monthsOfYear[response[key].month-1]);
        data.push(response[key].avg)
    };
    console.log(data);
    console.log(months);
    return months,data;
}

export function parsePromiseDay(promise)
{
    var day = [];
    var data = [];
    var key;
    promise.then(response => 
    {
        for ( key in response) 
        {
            day.push(days[response[key].day-1]);
            data.push(response[key].avg)
        };
    }).then(response => { return day,data;})
}