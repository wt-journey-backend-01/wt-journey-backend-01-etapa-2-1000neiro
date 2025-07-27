const express = require('express');
const router = express.Router();
const controller = require('../controllers/agentesController');

router.get('/', controller.getAgents);
router.get('/:id', controller.getAgentsById);
router.post('/', controller.postAgents);
router.put('/:id', controller.putAgents);
router.patch('/:id', controller.patchAgents);
router.delete('/:id', controller.deleteAgents);

module.exports = router;