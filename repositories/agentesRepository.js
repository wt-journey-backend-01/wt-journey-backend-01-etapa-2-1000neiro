const { v4: uuidv4 } = require('uuid');

const agentes = [];

const findAll = () => [...agentes];

const findById = (id) => agentes.find(a => a.id === id) || null;

const create = (agente) => {
    const newAgent = { id: uuidv4(), ...agente };
    agentes.push(newAgent);
    return newAgent;
};

const update = (id, data) => {
    const index = agentes.findIndex(a => a.id === id);
    if (index === -1) return null;
    agentes[index] = { ...agentes[index], ...data };
    return agentes[index];
};

const remove = (id) => {
    const initialLength = agentes.length;
    agentes = agentes.filter(a => a.id !== id);
    return initialLength !== agentes.length;
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};