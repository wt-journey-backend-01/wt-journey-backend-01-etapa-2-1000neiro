// sempre importar o uuid 
const { v4: uuidv4 } = require("uuid");
const casos = [];


//Todos os casos
const findAll = () => casos;


//Caso Especifico
const findById = (id) => casos.find((a) => a.id === id);


//Cria Caso
const createCases = (data) => {
    const novoCaso = { id: uuidv4, ...data };
    casos.push(novoCaso);
    return novoCaso;
};


//Atualiza Caso
const updateCases = (id, data) => {
    const index = casos.findIndex((u) => u.id === id);
    if (index !== -1) {
        casos[index] = { ...casos[index], ...data, id: casos[casosIndex].id };
        return casos[index];
    };
    return null;
};


//Remove casos
const deleteCases = (id) => {
    const index = casos.findIndex((d) => d.id === id); {
        if (index !== -1) {
            casos.splice(index, 1);
            return true;
        };
        return false;
    };
};

// Exporta Casos
module.exports = {
    findAll,
    findById,
    createCases,
    updateCases,
    deleteCases
}