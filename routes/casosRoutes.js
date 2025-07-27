const express = require('express');
const router = express.Router();
const controller = require('../controllers/casosController');

router.get('/', controller.getCasos);
router.get('/:id', controller.getCasoById);
router.post('/', controller.postCaso);
router.put('/:id', controller.putCaso);
router.patch('/:id', controller.patchCaso);
router.delete('/:id', controller.deleteCaso);

module.exports = router;