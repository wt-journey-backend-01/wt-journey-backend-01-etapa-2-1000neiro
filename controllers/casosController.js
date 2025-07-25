const casosRepository = require("../repositories/casosRepository");
const agenteRepository = require("../repositories/agentesRepository");
const ApiError = require("../utils/errorHandler");

const getAllCases = (req, res, next) => {
        const agenteid = req.query.agente_id;
        const status = req.query.status;

        try {
                let casos = casosRepository.findAll();
                if (agenteid) {
                        casos = casos.filter((caso) => caso.agente_id === agenteid); // Corrigido para usar agente_id
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
        } catch (error) {
                next(error);
        }
};

const getCasoId = (req, res, next) => {
        const id = req.params.id; // Corrigido para pegar o id corretamente
        try {
                const caso = casosRepository.findById(id); // Chamada correta ao repositório
                if (!caso) {
                        return res.status(404).json({ message: "Caso não encontrado." });
                }
                res.status(200).json(caso);
        } catch (error) {
                next(new ApiError("Erro na busca do caso.", 400));
        }
};

module.exports = {
        getAllCases,
        getCasoId
};
