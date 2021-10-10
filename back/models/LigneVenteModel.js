const mongoose = require("mongoose");
const LigneVenteSchema = new mongoose.Schema(

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
            ref:'Facture_client',
            required: true 
          
        },
        
    },
    {  timestamps : true, }
    
    
);
module.exports = mongoose.model('LigneVente',LigneVenteSchema);