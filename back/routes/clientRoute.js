const router = require('express').Router();
const clientController = require('../controllers/clientController');


router.get('/', clientController.readClient);


router.post('/', clientController.createClient);
router.post('/register', clientController.RegisterClient);

router.post('/login', clientController.loginClient);

router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);



module.exports = router;
