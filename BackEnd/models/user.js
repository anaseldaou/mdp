var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// https://www.npmjs.com/package/passport-local-mongoose
var passportLocalMongoose = require('passport-local-mongoose');



var noteSchema = new Schema({
    note:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var User = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    admin:   {
        type: Boolean,
        default: false
    },
    notes:[noteSchema]
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);