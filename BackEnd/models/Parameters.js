const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
require('./Devices');
/*
const Parameter = new Schema(
    {
    Values : 
    {
         type : Object
    }
    ,
    Unite : 
    {
        type : String
    }
}   
    ,
    {timestamps: false});
*/

const Parameter = {
    Values:Object,
    Unite:String
}
const ParameterSchema = new Schema(
    {
        Serial_Number:
        {
            type:String,
            required:true
        }
        ,
        Charge_batterie_interne:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Charge_batterie_externe: 
        {
            type:Parameter,
            required: true,
            default : null
        },/*
        ,
        Tension_du_panneau_solaire:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Etat_du_reseau_4G:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Température_air_en_Celsius:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Humidité_air_en_percent:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Vitesse_de_vent_instantanée:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Direction_du_vent:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Intensité_du_rayonnement_solaire:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,*/
        Pluie_instantanee:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Pluie_cumulee_sur_la_derniere_heure:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Pluie_cumulee_sur_les_dernieres_24h:
        {
            type:Parameter,
            required: true,
            default : null
        }
        /*,
        SO2:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        CO2:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        NO2:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Particule_de_1micron:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Particule_de_25_micron:
        {
            type:Parameter,
            required: true,
            default : null
        }
        ,
        Particule_de_10_micron:
        {
            type:Parameter,
            required: true,
            default : null
        }*/


    }
    ,
     {timestamps: true});

var Parameters = mongoose.model('Parameters', ParameterSchema);

module.exports = Parameters;