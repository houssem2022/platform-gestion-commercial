const mongoose = require("mongoose"); 



const Facture_clientSchema = new mongoose.Schema(

   // "Facture_client",
    {
        prix_tot:{
            type: String
            //required: true 
        },
        
        date:{
            type: String
           // required: true 
        },
        client:{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Client',
            required: true 
        }



    },
   // {timestamps : true ,}
  
);
module.exports = mongoose.model('Facture_client',Facture_clientSchema);