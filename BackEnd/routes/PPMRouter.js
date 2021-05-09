
const express = require('express');
const bodyParser = require('body-parser');
const Parameter = require('../models/Parameters');


const PPMRouter = express.Router();



PPMRouter.route('/:echelle/:limit')
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
                         
                        avg_PPM1 : {$avg:"$PPM1"},
                        avg_PPM2_5 : {$avg:"$PPM2_5"},
                        avg_PPM4 : {$avg:"$PPM4"},
                        avg_PPM10 : {$avg:"$PP10"}},
        
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
                    avg_PPM1 : doc.avg_PPM1,
                    avg_PPM2_5 : doc.avg_PPM2_5,
                    avg_PPM4 : doc.avg_PPM4,
                    avg_PPM10 : doc.avg_PPM10
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
                avg_PPM1 : {$avg:"$PPM1"},
                avg_PPM2_5 : {$avg:"$PPM2_5"},
                avg_PPM4 : {$avg:"$PPM4"},
                avg_PPM10 : {$avg:"$PP10"}},             
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
                    avg_PPM1 : doc.avg_PPM1,
                    avg_PPM2_5 : doc.avg_PPM2_5,
                    avg_PPM4 : doc.avg_PPM4,
                    avg_PPM10:doc.avg_PPM10
                }
                });
                res.json(resultat);
            })
            break;
        case "perMonth" :
            Parameter.aggregate([{ $group : {
                _id : { year: { $year : "$timestamp" },
                        month: { $month : "$timestamp" }}, 
                avg_PPM1 : {$avg:"$PPM1"},
                avg_PPM2_5 : {$avg:"$PPM2_5"},
                avg_PPM4 : {$avg:"$PPM4"},
                avg_PPM10 : {$avg:"$PP10"}},             
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
                    avg_PPM1 : doc.avg_PPM1,
                    avg_PPM2_5 : doc.avg_PPM2_5,
                    avg_PPM4 : doc.avg_PPM4,
                    avg_PPM10:doc.avg_PPM10
                }
                });
                res.json(resultat);
            })
            break;
        default :
            res.setHeader('Content-Type','application/json');
            next(err);
            }})

module.exports = PPMRouter ;