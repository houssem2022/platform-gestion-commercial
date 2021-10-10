const router = require('express').Router();
const ligneAchatController = require('../controllers/ligneAchatController');


router.get('/', ligneAchatController.readLigneA);
router.get('/:id', ligneAchatController.readLigneAId);

router.post('/', ligneAchatController.createLigneA);
router.put('/:id', ligneAchatController.updateLigneA);
router.delete('/:id', ligneAchatController.deleteLigneA);



module.exports = router;
