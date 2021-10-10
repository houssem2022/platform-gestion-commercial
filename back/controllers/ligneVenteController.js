//const express = require('express');
//const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose');

const LigneVenteModel  = require('../models/LigneVenteModel');


module.exports.readLigneV = async (req, res) => {
    //http://localhost:5500/ligneAchat?factures=6081b79c0b0d8b47807c85f5


    let filter = {};
    if(req.query.factures)
    {
         filter = {facture: req.query.factures.split(',')}
    }

    const factVListe = await LigneVenteModel.find(filter).populate('facture').populate('produit');

    if(!factVListe) {
        res.status(500).json({success: false})
    } 
    res.send(factVListe);
   /* LigneAchatModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    }).populate('produit').populate('facture');*/
}

module.exports.readLigneVId = async (req, res) => {
    const factLV = await LigneVenteModel.findById(req.params.id).populate('produit').populate('facture');

    if(!factLV){
        res.status(500).json({success: false})
    }
    res.send(factLV);
}


module.exports.createLigneV = (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.body.facture))
        return res.status(400).send('Invalid facture');
    if(!mongoose.Types.ObjectId.isValid(req.body.produit))
        return res.status(400).send('Invalid produit');
    
    const newRecord = new LigneVenteModel({
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
module.exports.updateLigneV = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
    const updateRecord = {
        qte: req.body.qte,
        produit: req.body.produit,
        facture: req.body.facture

    } ;
    LigneVenteModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new:true},
        (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        }
    )
    

}
module.exports.deleteLigneV = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
      LigneVenteModel.findByIdAndDelete(
          req.params.id,
          (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        })

};



//module.exports = router 