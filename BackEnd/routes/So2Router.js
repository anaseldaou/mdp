
const express = require('express');
const bodyParser = require('body-parser');
const Parameter = require('../models/Parameters');


const So2Router = express.Router();



So2Router.route('/:echelle/:limit')
.get((req,res,next) => {
    var limite = req.params.limit == undefined ? 1500 : parseInt(req.params.limit);
    switch(req.params.echelle){
        case "perHour" :
            Parameter.aggregate([
                { $group : { 
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" },
                        week:{$week : "$timestamp"},
                        day: { $dayOfMonth : "$timestamp" },
                        hour: {$hour : "$timestamp"}},
                         
                avg : {$avg:"$So2"},
                sum : {$sum:"$So2"}, //equivalent Pluie_cumulee par Heure
                min: {$min:"$So2"},
                max : {$max:"$So2"}},
        
            },
            {$limit: limite},
            {$sort : {_id:1}}
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
                avg : {$avg:"$So2"},
                sum : {$sum:"$So2"}, //equivalent Pluie_cumulee par parseInt(req.params.echelle) heure
                min: {$min:"$So2"},
                max : {$max:"$So2"}},
                
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
                avg : {$avg:"$So2"},
                sum : {$sum:"$So2"},
                min: {$min:"$So2"},
                max : {$max:"$So2"}},
                
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
                        avg : {$avg:"$So2"},
                        sum : {$sum:"$So2"},
                        min: {$min:"$So2"},
                        max : {$max:"$So2"}}},
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
                avg : {$avg:"$So2"},
                sum : {$sum:"$So2"},
                min: {$min:"$So2"},
                max : {$max:"$So2"}}}
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
            const limit = parseInt(req.params.limit);
            Parameter.find({},{So2:1 ,timestamp:1}).sort(sort).limit(limit).then(
                response=>{ console.log(response) ; res.json(response) ;}
            )
            break;
        default :
            res.setHeader('Content-Type','application/json');
            next(err);
            }})

module.exports = So2Router ;