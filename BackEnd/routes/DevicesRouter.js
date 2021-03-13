const express = require('express');
const bodyParser = require('body-parser');

const Devices = require('../models/Devices');

const DeviceRouter = express.Router();

DeviceRouter.use(bodyParser.json());

DeviceRouter.route('/')
.get((req,res,next) => {
    Devices.find({})
    .then((Devices) => {
        res.setHeader('Content-Type')
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    if ( req.body.username=="admin" && req.body.password=="password")
    {
    Devices.create(req.body)
    .then((Device) => {
        console.log('Device Created ', Device);
        
        res.setHeader('Content-Type', 'application/json');
        res.json(Device);
    }, (err) => next(err))
    .catch((err) => next(err));


}
else{res.setHeader('Content-Type', 'application/json');
res.json(Device);}

})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /Devices');
})
.delete((req, res, next) => {
    Devices.remove({})
    .then((resp) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));   

});

DeviceRouter.route('/:DeviceId')
.get((req,res,next) => {
    Devices.findById(req.params.DeviceId)
    .then((Device) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(Device);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /Devices/'+ req.params.DeviceId);
})
.put((req, res, next) => {
    Devices.findByIdAndUpdate(req.params.DeviceId, {
        $set: req.body
    }, { new: true })
    .then((Device) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(Device);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Devices.findByIdAndRemove(req.params.DeviceId)
    .then((resp) => {
        
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = DeviceRouter;