const router = require('express').Router();
const categorieController = require('../controllers/CategorieController');


router.get('/', categorieController.readCategorie);
router.get('/:id', categorieController.readCategorieId);

router.post('/', categorieController.createCategorie);
router.put('/:id', categorieController.updateCategorie);
router.delete('/:id', categorieController.deleteCategorie);
router.post('/nom_categorie', categorieController.readCategorieNom);


module.exports = router;
