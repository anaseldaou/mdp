const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;


const DeviceSchema = new Schema({
    Serial_Number: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var Devices = mongoose.model('Devices', DeviceSchema);

module.exports = Devices;