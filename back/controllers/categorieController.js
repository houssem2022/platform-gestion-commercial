
const ObjectID = require('mongoose').Types.ObjectId;

const categorieModel  = require('../models/CategorieModel');
const CategorieModel  = require('../models/CategorieModel');

const {creates}  = require('../utils/errors');

module.exports.readCategorieNom = async (req, res) => {
    const ca = await CategorieModel.find({ nom: req.body.nom}).select('_id');

    if(!ca){
        res.status(500).json({success: false})
    }
    res.send(ca);
}

module.exports.readCategorie = (req, res) => {
    CategorieModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data :  " + err);

    })
}

module.exports.readCategorieId= async (req, res) => {
    const cat = await CategorieModel.findById(req.params.id);

    if(!cat){
        res.status(500).json({success: false})
    }
    res.send(cat);
}


module.exports.createCategorie = async (req, res) => {
    
    try{
    let newRecord = new categorieModel({
        nom: req.body.nom,
        description: req.body.description
       
    })
    newRecord = await newRecord.save();
    res.send(newRecord)

    } catch(err){
    const errors = creates(err);
    return res.status(500).send(errors);
    }
}


module.exports.updateCategorie = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
    const updateRecord = {
       
        nom: req.body.nom,
        description: req.body.description

    } ;
    CategorieModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new:true},
        (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        }
    )
    

}
module.exports.deleteCategorie = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID unkown :" + req.params.id)
      CategorieModel.findByIdAndDelete(
          req.params.id,
          (err, docs)=> {
            if (!err) res.send(docs)
            else console.log("update err"+ err);
        })

};