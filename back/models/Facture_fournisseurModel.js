const mongoose = require("mongoose"); 



const Facture_fournisseurSchema = new mongoose.Schema(

    //"Facture_fournisseur",
    {
        etat:{
            type: String,
            required: true ,
        },
        echeance:{
            type: String
           // required: true 
        },
        montant:{
            type: String
            //required: true ,
            //unique: true
        },
        date:{
            type: String
           // required: true 
        },
        fournisseur:{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Fournisseur',
            required:true 
          }




    },
    {timestamps : true ,}
  
);
module.exports = mongoose.model('Facture_fournisseur',Facture_fournisseurSchema);