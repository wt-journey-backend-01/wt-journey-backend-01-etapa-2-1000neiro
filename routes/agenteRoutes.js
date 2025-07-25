const express = require('express')
const router = express.Router();
const agentesController = require('../controllers/agentesController');

// define a rota para /agentes usando o método GET
router.get("/" , agentesController.getAgents);
router.get("/id", agentesController.getAgentsById);
router.patch("/", agentesController.patchAgents);
router.delete("/", agentesController.deleteAgents);

module.exports = router;