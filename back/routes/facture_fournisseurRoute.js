const router = require('express').Router();
const facture_fournisseurController = require('../controllers/facture_fournisseurController');



router.get('/', facture_fournisseurController.readFactureF);
router.get('/:id', facture_fournisseurController.readFactureFI);

router.post('/', facture_fournisseurController.createFactureF);
router.put('/:id', facture_fournisseurController.updateFactureF);
router.delete('/:id', facture_fournisseurController.deleteFactureF);


router.get(`/get/count`, facture_fournisseurController.Count);
router.get(`/get/etat/:count`, facture_fournisseurController.factetat);



module.exports = router;
