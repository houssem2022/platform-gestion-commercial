//const express = require('express');
//const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose');

const LigneAchatModel  = require('../models/LigneAchatModel');
const ligneAchatModel  = require('../models/LigneAchatModel');
const ProduitModel  = require('../models/ProduitModel');



module.exports.readLigneA = async (req, res) => {
    //http://localhost:5500/ligneAchat?factures=6081b79c0b0d8b47807c85f5


    let filter = {};
    if(req.query.factures)
    {
         filter = {facture: req.query.factures.split(',')}
    }

    const factAListe = await ligneAchatModel.find(filter).populate('facture').populate('produit');

    if(!factAListe) {
        res.status(500).json({success: false})
    } 
    res.send(factAListe);
   /* LigneAchatModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    }).populate('produit').populate('facture');*/
}

module.exports.readLigneAId = async (req, res) => {
    const factLA = await LigneAchatModel.findById(req.params.id).populate('produit').populate('facture');

    if(!factLA){
        res.status(500).json({success: false})
    }
    res.send(factLA);
}


module.exports.createLigneA = (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.body.facture))
        return res.status(400).send('Invalid facture');
    if(!mongoose.Types.ObjectId.isValid(req.body.produit))
        return res.status(400).send('Invalid produit');
    
    const newRecord = new ligneAchatModel({
        qte: req.body.qte,
        produit: req.body.produit,
        facture: req.body.facture

    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })
}





//update
module.exports.updateLigneA = async (req, res) => {

    
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id);
  /*  if(!mongoose.Types.ObjectId.isValid(req.body.facture))
        return res.status(400).send('Invalid facture');
    if(!mongoose.Types.ObjectId.isValid(req.body.produit))
        return res.status(400).send('Invalid produit');*/


    const updateRecord = {
        qte: req.body.qte,
        produit: req.body.produit,
        facture: req.body.facture

    } ;
    LigneAchatModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new:true},
        (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        }
    )
    

}
module.exports.deleteLigneA = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
      LigneAchatModel.findByIdAndDelete(
          req.params.id,
          (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        })

};



//module.exports = router 