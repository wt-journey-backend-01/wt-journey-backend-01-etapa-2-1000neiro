// sempre importar o uuid 
const { v4: uuidv4 } = require("uuid");
const agentes = [];


//Lista Agentes
const findAll = () => agentes;


//Agentes Especifico
const findById = (id) => agentes.find((a) => a.id === id);


//Cria Agentes
const createAgents = (data) => {
    const novoCaso = { id: uuidv4, ...data };
    agentes.push(novoCaso);
    return novoCaso;
};


//Atualiza Agentes
const updateAgents = (id, data) => {
    const index = agentes.findIndex((u) => u.id === id);
    if (index !== -1) {
        agentes[index] = { ...agentes[index], ...data, id: agentes[agentesIndex].id };
        return agentes[index];
    };
    return null;
};

//Remove Agentes
const deleteAgents = (id) => {
    const index = agentes.findIndex((d) => d.id === id); {
        if (index !== -1) {
            agentes.splice(index, 1);
            return true;
        };
        return false;
    };
};


//Exporta Agentes
module.exports = {
    findAll,
    findById,
    createAgents,
    updateAgents,
    deleteAgents
}