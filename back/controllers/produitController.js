//const express = require('express');
//const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose');

const  ProduitModel  = require('../models/ProduitModel');
const  produitModel  = require('../models/ProduitModel');



//router.get('/', (req, res) => {
module.exports.readProduit = async (req, res) => {
    //http://localhost:5500/produit?categories=60822da9a289da5a2c1c7ee3

 
         //filter = {categorie: req.query.categories.split(',')}
 
    let filter = {};
    if(req.query.categories)
    {
         filter = {categorie: req.query.categories}
    }
    const produitListe = await produitModel.find(filter).populate('categorie');

    if(!produitListe) {
        res.status(500).json({success: false})
    } 
    res.send(produitListe);


    /*ProduitModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    })*/
}



module.exports.readProduitId = async (req, res) => {
    const prod = await produitModel.findById(req.params.id).populate('categorie');

    if(!prod){
        res.status(500).json({success: false})
    }
    res.send(prod);
}


//router.post('/',(req,res)=>{
module.exports.createProduit = (req, res) => {

    //if(!mongoose.Types.ObjectId.isValid(req.body.categorie))
    //return res.status(400).send('Invalid categorie');

    const newRecord = new produitModel({
        label: req.body.label,
        categorie: req.body.categorie,
        stock: req.body.stock,
        prix: req.body.prix,
        stockmin: req.body.stockmin,
        description: req.body.description,
        image: req.body.image
    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })
}


module.exports.updateProduit = (req, res) => {

    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
    const updateRecord = {
       
        label: req.body.label,
        categorie: req.body.categorie,
        stock: req.body.stock,
        prix: req.body.prix,
        stockmin: req.body.stockmin,
        description: req.body.description,
        image: req.body.image

    } ;
    ProduitModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new:true},
        (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        }
    )
    

//});
}
//router.delete("/:id",(req, res)=> {

module.exports.deleteProduit = (req, res) => {

    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
      ProduitModel.findByIdAndDelete(
          req.params.id,
          (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        })

//});
};



//module.exports = router 