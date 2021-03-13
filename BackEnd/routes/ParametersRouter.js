const express = require('express');
const bodyParser = require('body-parser');
const Device = require('../models/Devices');
const Parameter = require('../models/Parameters');

const ParameterRouter = express.Router();

var last_Date = new Date();
var last_day = last_Date.getDate();
var last_hour = last_Date.getHours();


var last_pluie_cumule_pour_jour = 0;
var last_pluie_cumule_pour_heure = 0;



ParameterRouter.use(bodyParser.json());

ParameterRouter.route('/')
.get((req,res,next) => {
    Parameter.find({})
    .then((Parametertion) => {
        res.setHeader('Content-Type', 'application/json');
        res.json(Parametertion);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    //Pluie_cumulée_sur_la_dernière_heure:
    //Pluie_cumulée_sur_les_dernières_24h:


   // var last_Inserted_document_timestamp = Para.find().sort({ '_id': -1 }).limit(1).forEach(
     //   function(doc){
       //     print("record:"+doc._id.getTimestamp());
   //})

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
     
     
    Parameter.create(req.body)
    .then((Parametertion) => {
        //console.log('Parameter Created ', Parametertion);
        res.setHeader('Content-Type', 'application/json');
        res.json(Parametertion);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /Parametert');
})
.delete((req, res, next) => {
    Parameter.remove({})
    .then((resp) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

ParameterRouter.route('/:ParameterId')
.get((req,res,next) => {
    Parameter.findById(req.params.ParameterId)
    .then((Parametertion) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(Parameter);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /Parameter/'+ req.params.ParameterId);
})
.put((req, res, next) => {
    Parameter.findByIdAndUpdate(req.params.ParameterId, {
        $set: req.body
    }, { new: true })
    .then((dish) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(Parameter);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Parameter.findByIdAndRemove(req.params.ParameterId)
    .then((resp) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = ParameterRouter;