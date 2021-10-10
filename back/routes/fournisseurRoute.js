const router = require('express').Router();
const fournisseurController = require('../controllers/fournisseurController');


router.get('/', fournisseurController.readFournisseur);
router.get('/:id', fournisseurController.readFournisseurId);

router.post('/', fournisseurController.createFournisseur);
router.put('/:id', fournisseurController.updateFournisseur);
router.delete('/:id', fournisseurController.deleteFournisseur);



module.exports = router;
