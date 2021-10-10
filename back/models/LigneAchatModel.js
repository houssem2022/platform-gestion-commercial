const mongoose = require("mongoose");
const LigneAchatSchema = new mongoose.Schema(

    //"LigneAchat",
    {
        qte:{
            type: Number,
            default : 1
            //required: true 
        },
        produit:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produit',
            required: true 
        },
        facture:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Facture_fournisseur',
            required: true 
          
        },
        
    },
    {  timestamps : true, }
    
    
);
module.exports = mongoose.model('LigneAchat',LigneAchatSchema);