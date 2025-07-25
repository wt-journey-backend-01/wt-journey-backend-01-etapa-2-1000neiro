const { v4: uuidv4 } = require("uuid");

let agentes = []; // Array para armazenar agentes

const findAll = () => {
    return agentes;
};

const findById = (id) => {
    return agentes.find(agente => agente.id === id);
};

const createAgents = (newAgent) => {
    const agentWithId = { id: uuidv4(), ...newAgent }; // Adiciona um novo ID
    agentes.push(agentWithId);
    return agentWithId;
};

const updateAgents = (id, updatedAgent) => {
    const index = agentes.findIndex(agente => agente.id === id);
    if (index !== -1) {
        agentes[index] = { ...agentes[index], ...updatedAgent }; // Atualiza os dados
        return agentes[index];
    }
    return null;
};

const deleteAgents = (id) => {
    const index = agentes.findIndex(agente => agente.id === id);
    if (index !== -1) {
        agentes.splice(index, 1); // Remove o agente
        return true;
    }
    return false;
};

const patchAgents = (id, updatedData) => {
    const index = agentes.findIndex(agente => agente.id === id);
    if (index !== -1) {
        agentes[index] = { ...agentes[index], ...updatedData }; // Atualiza parcialmente
        return agentes[index];
    }
    return null;
};

module.exports = {
    findAll,
    findById,
    createAgents,
    updateAgents,
    deleteAgents,
    patchAgents
};
