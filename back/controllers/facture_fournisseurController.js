//const express = require('express');
//const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose');
const facture_fournisseurModel = require('../models/Facture_fournisseurModel');

const Facture_fournisseurModel = require('../models/Facture_fournisseurModel');
const FournisseurModel  = require('../models/FournisseurModel');



module.exports.readFactureF = async (req, res) => {
        // http://localhost:5500/facturef?fournisseurs=6081b7360b0d8b47807c85f3

        let filter = {};
        if(req.query.fournisseurs)
        {
             filter = {fournisseur: req.query.fournisseurs.split(',')}
        }
    
        const factListe = await Facture_fournisseurModel.find(filter).populate('fournisseur');
    
        if(!factListe) {
            res.status(500).json({success: false})
        } 
        res.send(factListe);

   /* Facture_fournisseurModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    }).populate('fournisseur');*/
}

module.exports.readFactureFI = async (req, res) => {
    const factF = await facture_fournisseurModel.findById(req.params.id).populate('fournisseur');

    if(!factF){
        res.status(500).json({success: false})
    }
    res.send(factF);
}






module.exports.createFactureF  =  async (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.body.fournisseur))
     return res.status(400).send('Invalid fournisseur');


    let newRecord = new facture_fournisseurModel({
        etat: req.body.etat,
        echeance: req.body.echeance,
        montant: req.body.montant,
        date: req.body.date,
        fournisseur: req.body.fournisseur,

    })

    newRecord = await newRecord.save();

    if(!newRecord) 
    return res.status(500).send('The newRecord cannot be created')

    res.send(newRecord);
    /*newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })*/
}


module.exports.updateFactureF = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
    const updateRecord = {
       
        etat: req.body.etat,
        echeance: req.body.echeance,
        montant: req.body.montant,
        fournisseur: req.body.fournisseur,
        date: req.body.date

    } ;
    Facture_fournisseurModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new:true},
        (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        }
    )
    

}
module.exports.deleteFactureF = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
      Facture_fournisseurModel.findByIdAndDelete(
          req.params.id,
          (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        })

}
module.exports.Count = async (req, res) => {
    const factFCount = await facture_fournisseurModel.countDocuments((count)=>count);

    if(!factFCount){
        res.status(500).json({success: false})
    }
    res.send({factFCount : factFCount });
}
module.exports.factetat = async (req, res) => {
    const count = req.params.count ? req.params.count : 0

    const facts = await facture_fournisseurModel.find({etat:"V"}).limit(+count);

    if(!facts){
        res.status(500).json({success: false})
    }
    res.send({factFCount : facts });
};



//module.exports = router 