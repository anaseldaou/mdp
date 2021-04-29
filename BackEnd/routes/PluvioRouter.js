const express = require('express');
const bodyParser = require('body-parser');
const Parameter = require('../models/Parameters');


const PluvioRouter = express.Router();


PluvioRouter.route('/:echelle/:limit')
.get((req,res,next) => {
    var limite = req.params.limit == undefined ? 1500 : parseInt(req.params.limit);
    switch(req.params.echelle){
        case "perHour" :
            Parameter.aggregate([
                {$sort : {'timestamp':1}},
                { $group : { 
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" },
                        week:{$week : "$timestamp"},
                        day: { $dayOfMonth : "$timestamp" },
                        hour: {$hour : "$timestamp"},
                    },    
                avg : {$avg:"$Pluvio"},
                sum : {$sum:"$Pluvio"}, //equivalent Pluie_cumulee par Heure
                min: {$min:"$Pluvio"},
                max : {$max:"$Pluvio"}},
            },
            {$limit: parseInt(req.params.limit)}
             //day: { $dayOfMonth : "$timestamp" }  ,
             //hour: {$hour : "$timestamp"}  }}
            ])
            .then(response => {
                console.log(response.map(doc => doc._id));
                res.setHeader('Content-Type', 'application/json');
                const resultat = response.map( doc =>  {
                    return {
                    year:doc._id.year,
                    month:doc._id.month,
                    week : doc._id.week,
                    day : doc._id.day,
                    hour : doc._id.hour,
                    avg : doc.avg,
                    sum : doc.sum,
                    min : doc.min,
                    max:doc.max
                }
                });
                res.json(resultat);
            })
            break;
        case "perDay" :
            Parameter.aggregate([{ $group : { 
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" },
                        week:{$week : "$timestamp"},
                        day: { $dayOfMonth : "$timestamp" }}, 
                avg : {$avg:"$Pluvio"},
                sum : {$sum:"$Pluvio"}, //equivalent Pluie_cumulee par parseInt(req.params.echelle) heure
                min: {$min:"$Pluvio"},
                max : {$max:"$Pluvio"}},
                
            },
            {$limit: limite},
            {$sort : {_id:1}}
            ])
            .then(response => {
                console.log(response.map(doc => doc._id));
                res.setHeader('Content-Type', 'application/json');
                const resultat = response.map( doc =>  {
                    return {
                    year:doc._id.year,
                    month:doc._id.month,
                    week : doc._id.week,
                    day : doc._id.day,
                    avg : doc.avg,
                    sum : doc.sum,
                    min : doc.min,
                    max:doc.max
                }
                });
                res.json(resultat);
            })
            break;
        case "perWeek" :
            Parameter.aggregate([{ $group : { 
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" },
                        week:{$week : "$timestamp"}}, 
                avg : {$avg:"$Pluvio"},
                sum : {$sum:"$Pluvio"},
                min: {$min:"$Pluvio"},
                max : {$max:"$Pluvio"}},
                
            }
            ,
            {$limit: limite},
            {$sort : {_id:1}}
            ])
            .then(response => {
                console.log(response.map(doc => doc._id));
                res.setHeader('Content-Type', 'application/json');
                const resultat = response.map( doc =>  {
                    return {
                    year:doc._id.year,
                    week : doc._id.week,
                    avg : doc.avg,
                    sum : doc.sum,
                    min : doc.min,
                    max:doc.max
                }
                });
                res.json(resultat);
            })
            break;
        case "perMonth" :
            Parameter.aggregate([{ $group : { 
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" }},
                        avg : {$avg:"$Pluvio"},
                        sum : {$sum:"$Pluvio"},
                        min: {$min:"$Pluvio"},
                        max : {$max:"$Pluvio"}}},
                        {$limit: limite},
                        {$sort : {_id:1}}
            ])
            .then(response => {
                res.setHeader('Content-Type', 'application/json');
                const resultat = response.map( doc =>  {
                    return {
                    year: doc._id.year,
                    month :doc._id.month,
                    avg : doc.avg,
                    sum : doc.sum,
                    min : doc.min,
                    max:doc.max
                }
                });
                res.json(resultat);}
                )
            break;
        case "perYear" :
            Parameter.aggregate([{ $group : { 
                _id : { year: { $year : "$timestamp" }}, 
                avg : {$avg:"$Pluvio"},
                sum : {$sum:"$Pluvio"},
                min: {$min:"$Pluvio"},
                max : {$max:"$Pluvio"}}}
    ])
            .then(response => {
                console.log(response.map(doc => doc._id));
                res.setHeader('Content-Type', 'application/json');
                const resultat = response.map( doc =>  {
                    return {
                    year: doc._id.year,
                    avg : doc.avg,
                    sum : doc.sum,
                    min : doc.min,
                    max:doc.max
                }
                });
                res.json(resultat);
            })
            break;
        case "instantanee":
            res.setHeader('Content-Type', 'application/json');
            // define an empty query document
            const query = {};
            // sort in descending (-parseInt(req.params.limit)) order by length
            const sort = { _id:1 };
            Parameter.find({},{Pluvio:1 ,timestamp:1}).sort(sort).limit(parseInt(req.params.limit)).then(
                response=>{ console.log(response) ; res.json(response) ;}
            )
            break;
        default :
            res.setHeader('Content-Type','application/json');
            next(err);
            }})
module.exports = PluvioRouter ;