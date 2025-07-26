const express = require('express');
const router = express.Router();
const agentesController = require('../controllers/agentesController');

router.get("/", agentesController.getAgents);
router.get("/:id", agentesController.getAgentsById);
router.post("/", agentesController.postAgents);
router.put("/:id", agentesController.putAgents);
router.patch("/:id", agentesController.patchAgents);
router.delete("/:id", agentesController.deleteAgents);

module.exports = router;