const mongoose = require('mongoose');
const ClientShema= new mongoose.Schema(

   // "Client",
    {
        nom:{
            type: String,
            required: true 
        },
      
        email:{
            type: String,
            required: true ,
            //unique: true
        },
        Num_tel:{
            type: String,
            required: true 
        },
        passwordHash:{
            type: String,
            required: true 
        },
        ville:{
            type: String 
        },
        isAdmin:{
            type: Boolean, 
            default:false
        },




    },
    {
        timestamps: true,
    }
    
);
module.exports = mongoose.model('Client', ClientShema);
//module.exports = { ClientModel };