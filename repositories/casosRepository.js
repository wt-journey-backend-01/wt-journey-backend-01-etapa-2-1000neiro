const { v4: uuidv4 } = require('uuid');

let casos = [];

const findAll = () => [...casos];

const findById = (id) => casos.find(c => c.id === id) || null;

const create = (caso) => {
    const newCaso = { id: uuidv4(), ...caso };
    casos.push(newCaso);
    return newCaso;
};

const update = (id, data) => {
    const index = casos.findIndex(c => c.id === id);
    if (index === -1) return null;
    casos[index] = { ...casos[index], ...data };
    return casos[index];
};

const remove = (id) => {
    const index = casos.findIndex(c => c.id === id);
    if (index === -1) return false;
    casos.splice(index, 1);
    return true;
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};