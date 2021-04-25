const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ParameterSchema = new Schema(
        {
            Identifiant_Station:
            {
                type:Number,
                required:true
            }
            ,
            Voltage_Lithium:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            Voltage_Extern:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            Temperature:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            Humidity:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            Wind_Speed:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            Wind_Dir:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            Pluvio:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            CO2:
            {
                type:Number,
                required: true,
                default : null
            },
            SO2:
            {
                type:Number,
                required: true,
                default : null
            }
            
            ,
            Pyran:
            {
                type:Number,
                required: true,
                default : null
            },
            PPM1:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            PPM2_5:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            PPM4:
            {
                type:Number,
                required: true,
                default : null
            }
            ,
            PP10:
            {
                type:Number,
                required: true,
                default : null
            }
    
    
        }
        ,
         {timestamps: true});

mongoose.model('Parameters', ParameterSchema);
module.exports = mongoose.model('Parameters');