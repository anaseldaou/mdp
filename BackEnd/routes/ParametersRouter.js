const express = require('express');
const bodyParser = require('body-parser');
const Device = require('../models/Devices');
const Parameter = require('../models/Parameters');

const getWeek = (day) =>
{
    return ( Math.floor(day/7) > 4 )  ? 4 : Math.floor(day/7)+1;
}

const ParameterRouter = express.Router();

var last_Date = new Date();
var last_day = last_Date.getDate();
var last_hour = last_Date.getHours();
var last_month = last_Date.getMonth();
var last_year = last_Date.getFullYear();


var last_pluie_cumule_pour_jour = 0;
var last_pluie_cumule_pour_heure = 0;



ParameterRouter.use(bodyParser.json());

var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

ParameterRouter.route('/')
.get((req,res,next) => {
    Parameter.find({})
    .then((Parametert) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(Parametert);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
/*
   if ( new Date().getDate() == last_day)
   {
       last_pluie_cumule_pour_jour+=parseInt(req.body.Pluie_instantanee);
   }
   else 
   {
       last_day = new Date().getDate();
       last_pluie_cumule_pour_jour = parseInt(req.body.Pluie_instantanee);
    }

    if ( new Date().getHours() == last_hour)
    {
        last_pluie_cumule_pour_heure+=parseInt(req.body.Pluie_instantanee);
        console.log("true");
    }
    else 
    { 
        last_hour = new Date().getHours();
        last_pluie_cumule_pour_heure = parseInt( req.body.Pluie_instantanee) ;
        console.log("false");
     }
    
     req.body.Pluie_cumulee_sur_la_derniere_heure = last_pluie_cumule_pour_heure;
     req.body.Pluie_cumulee_sur_les_dernieres_24h = last_pluie_cumule_pour_jour;

     req.body.hour=last_hour;
     req.body.day=last_day;
     req.body.week=getWeek(last_day);
     req.body.month=last_month;
     req.body.year=last_year;
    */
    Parameter.create(req.body)
    .then((parameter) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(parameter);
    }, (err) => next(err))
    .catch((err) => next(err));
});

ParameterRouter.route('/Pluvio/:echelle')
.get((req,res,next) => {
    /*Parameter.find({}, { Pluie_instantanee: 1 , _id : 0})
    .then(response => {
        res.setHeader('Content-Type', 'application/json');
        var response = response.map(doc => doc.Pluie_instantanee);
        var max = Math.max.apply(Math, response);
        var min = Math.min.apply(Math, response);
        res.json(
            {
            data:response,
            max:max,
            min:min
            }
            );
    }, (err) => next(err))
    .catch((err) => next(err));*/
    switch(req.params.echelle){
        case "perDay" :
            Parameter.aggregate([{ $group : { 
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" },
                        week:{$week : "$timestamp"},
                        day: { $dayOfMonth : "$createdAt" }}, 
                avg : {$avg:"$Pluvio"}}
            }
            ])
            .then(response => {
                console.log(response.map(doc => doc._id));
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            break;
        case "perWeek" :
            Parameter.aggregate([{ $group : { 
                _id : { 
                    year: { $year : "$timestamp" },
                    week:{$week : "$timestamp"}},
                avg : {$avg:"$Pluvio"}}
            }
            ])
            .then(response => {
                console.log(response.map(doc => doc._id));
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            break;
        case "perMonth" :
            Parameter.aggregate([{ $group : { 
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" }}, 
                avg : {$avg:"$Pluvio"}}
            }
            ])
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                const resultat = response.map( doc =>  {
                    return {
                    month : months[doc._id.month],
                    avg : doc.avg}
                });
                res.json(resultat);}
                )
            break;
        case "perYear" :
            Parameter.aggregate([{ $group : { 
                _id : { year: { $year : "$timestamp" }}, 
                avg : {$avg:"$Pluvio"}}
            }
            ])
            .then(response => {
                console.log(response.map(doc => doc._id));
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            break;
        default :
            res.setHeader('Content-Type','application/json');
            next(err);
            }})
                


module.exports = ParameterRouter;