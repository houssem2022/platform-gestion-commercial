const mongoose = require("mongoose"); 



const ProduitSchema = new mongoose.Schema(

    //"Produit",
    {
        label:{
            type: String
        },
        categorie: [ {  
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Categorie' } ] ,

        stock:{
            type: String
            //required: true ,
            //unique: true
        },
        prix:{
            type: String
           // required: true 
        },
        stockmin:{
            type: String
           // required: true 
        },
        description:{
            type: String
            
        },
        image:{
            type: String
            
        },




    },
    //"Produit"
    { timestamps: true }
);
module.exports = mongoose.model('Produit', ProduitSchema);

//module.exports = { ProduitSchema};