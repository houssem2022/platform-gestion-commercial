
const ObjectID = require('mongoose').Types.ObjectId;
var mongoose = require('mongoose');

const  Facture_clientModel  = require('../models/Facture_clientModel');
const  facture_clientModel  = require('../models/Facture_clientModel');
const ClientModel = require('../models/ClientModel');



module.exports.readFClient = async (req,res)=>{
   
    let filter = {};
    if(req.query.clients)
    {
         filter = {client: req.query.clients.split(',')}
    }

    const FactureC_Liste = await Facture_clientModel.find(filter).populate('client');

    if(!FactureC_Liste) {
        res.status(500).json({success: false})
    } 
    res.send(FactureC_Liste);
   
    /*Facture_clientModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    })*/
}

module.exports.readFactureCId = async (req, res) => {
    const factC = await Facture_clientModel.findById(req.params.id).populate('client');

    if(!factC){
        res.status(500).json({success: false})
    }
    res.send(factC);
}


module.exports.createFClient = (req, res) => {

    if(!mongoose.Types.ObjectId.isValid(req.body.client))
    return res.status(400).send('Invalid client');
    
    const newRecord = new facture_clientModel({
        prix_tot: req.body.prix_tot,
        date: req.body.date,
        client: req.body.client
    });
    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('error creating new data   : ' +err);
    })
} 


module.exports.updateFClient = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
    const updateRecord = {
       
        prix_tot: req.body.prix_tot,
        date: req.body.date,
        client: req.body.client

    } ;
    Facture_clientModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new:true},
        (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        }
    )
    

}
module.exports.deleteFClient = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
      Facture_clientModel.findByIdAndDelete(
          req.params.id,
          (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        })

};



 