const router = require('express').Router();
const facture_clientController = require('../controllers/facture_clientController');


router.get('/', facture_clientController.readFClient);
router.get('/:id', facture_clientController.readFactureCId);

router.post('/', facture_clientController.createFClient);
router.put('/:id', facture_clientController.updateFClient);
router.delete('/:id', facture_clientController.deleteFClient);



module.exports = router;
