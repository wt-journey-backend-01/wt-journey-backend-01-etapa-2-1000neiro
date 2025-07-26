const { v4: uuidv4 } = require("uuid");

const agentes = [];

const findAll = () => {
    return agentes;
};

const findById = (id) => {
    return agentes.find(agente => agente.id === id);
};
const createAgents = (newAgent) => {
    const agentWithId = { id: uuidv4(), ...newAgent };
    agentes.push(agentWithId);
    return agentWithId;
};

const updateAgents = (id, updatedAgent) => {
    const index = agentes.findIndex(agente => agente.id === id);
    if (index !== -1) {
        agentes[index] = { ...agentes[index], ...updateAgent };
        return agentes[index];
    }
    return null;
};

const patchAgents = (id, updatedData) => {
    const index = agentes.findIndex(agente => agente.id === id);
    if (index !== -1) {
        agentes[index] = { ...agentes[index], ...updatedData };
        return agentes[index];
    }
    return null;
};

const deleteAgents = (id) => {
    const index = agentes.findIndex(agente => agente.id === id);
    if (index !== -1) {
        agentes.splice(index, 1);
        return true;
    }
    return false;
};

module.exports = {
    findAll,
    findById,
    createAgents,
    updateAgents,
    patchAgents,
    deleteAgents
};