const router = require('express').Router();
const produitController = require('../controllers/produitController');


router.get('/', produitController.readProduit);
router.get('/:id', produitController.readProduitId);

router.post('/', produitController.createProduit);
router.put('/:id', produitController.updateProduit);
router.delete('/:id', produitController.deleteProduit);



module.exports = router;
