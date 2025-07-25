const casosRepository = require("../repositories/casosRepository");
const agenteRepository = require("../repositories/agentesRepository");
const ApiError = require("../utils/errorHandler");



function getAllCases(req, res) {
const agenteid = req.query.agente_id;
    const status = req.query.status;

    let casos = casosRepository.findAll();
    if (agenteid) {
        casos = casos.filter((caso) => caso.agenteid === agenteid);
        if (casos.length === 0) {
            throw new ApiError(404, `Caso não encontrado para o agente de Id: ${agenteid}`);
        }
    }
    if (status) {
        casos = casos.filter((caso) => caso.status === status);
        if (casos.length === 0) {
            throw new ApiError(404, `Caso não encontrado com o status: ${status}`);
        }
    }

    res.status(200).json(casos);

}



function getCasoId(id) {
        const id = req.params.id;
        const caso = casosRepository.findById(id);
        res.status(200).json;
}
module.exports = {
   getAllCases
}