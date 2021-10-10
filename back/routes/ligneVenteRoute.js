const router = require('express').Router();
const ligneVenteController = require('../controllers/ligneVenteController');


router.get('/', ligneVenteController.readLigneV);
router.get('/:id', ligneVenteController.readLigneVId);

router.post('/', ligneVenteController.createLigneV);
router.put('/:id', ligneVenteController.updateLigneV);
router.delete('/:id', ligneVenteController.deleteLigneV);



module.exports = router;
