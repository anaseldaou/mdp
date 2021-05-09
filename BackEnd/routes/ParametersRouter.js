const express = require('express');
const bodyParser = require('body-parser');

//const Parameter = require('../models/Parameters');

var PluvioRouter = require('./PluvioRouter');
var WindDirRouter = require('./WindDirRouter.js');
var WindSpeedRouter = require('./WindSpeedRouter.js')
var HumidityRouter = require('./HumidityRouter');
var PPM1Router = require('./PPM1Router.js');
var PPM2_5Router = require('./PPM2_5Router.js');
var PPM4Router = require('./PPM4Router.js');
var PP10Router = require('./PP10Router.js');
var PyranRouter = require('./PyranRouter.js');
var CO2Router = require('./Co2Router.js');
var SO2Router = require('./So2Router.js');
var TemperatureRouter = require('./TemperatureRouter.js');
var PPMRouter = require('./PPMRouter');

const getWeek = (day) =>
{
    return ( Math.floor(day/parseInt(req.params.limit)) > 4 )  ? 4 : Math.floor(day/parseInt(req.params.limit))+parseInt(req.params.limit);
}

const ParameterRouter = express.Router();

//ParameterRouter.use(bodyParser.json());
ParameterRouter.use('/Temperature',TemperatureRouter);
ParameterRouter.use('/Pluvio',PluvioRouter);
ParameterRouter.use('/WindDir',WindDirRouter);
ParameterRouter.use('/WindSpeed',WindSpeedRouter);
ParameterRouter.use('/Humidity',HumidityRouter);
ParameterRouter.use('/PPMparseInt(req.params.limit)',PPM1Router);
ParameterRouter.use('/PPM2_5',PPM2_5Router);
ParameterRouter.use('/PPM4',PPM4Router);
ParameterRouter.use('/PP10',PP10Router);
ParameterRouter.use('/CO2',CO2Router);
ParameterRouter.use('/So2',SO2Router);
ParameterRouter.use('/Pyran',PyranRouter);
ParameterRouter.use('/PPM',PPMRouter);
/*
ParameterRouter.route('/')
.post((req, res, next) => {

   if ( new Date().getDate() == last_day)
   {
       last_pluie_cumule_pour_jour+=parseInt(req.body.Pluvio);
   }
   else 
   {
       last_day = new Date().getDate();
       last_pluie_cumule_pour_jour = parseInt(req.body.Pluvio);
    }

    if ( new Date().getHours() == last_hour)
    {
        last_pluie_cumule_pour_heure+=parseInt(req.body.Pluvio);
        console.log("true");
    }
    else 
    { 
        last_hour = new Date().getHours();
        last_pluie_cumule_pour_heure = parseInt( req.body.Pluvio) ;
        console.log("false");
     }
    
     req.body.Pluie_cumulee_sur_la_derniere_heure = last_pluie_cumule_pour_heure;
     req.body.Pluie_cumulee_sur_les_dernieres_parseInt(req.params.echelle)h = last_pluie_cumule_pour_jour;

     req.body.hour=last_hour;
     req.body.day=last_day;
     req.body.week=getWeek(last_day);
     req.body.month=last_month;
     req.body.year=last_year;
    
    Parameter.create(req.body)
    .then((parameter) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(parameter);
    }, (err) => next(err))
    .catch((err) => next(err));
});
*/
module.exports = ParameterRouter;