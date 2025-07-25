const agenteRepository = require("../repositories/agentesRepository");
const ApiError = require("../utils/errorHandler");
const agenteSchema = require("../utils/agentesValidation");

class ApiError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode;
    }
};

const getAgents = (req, res, next) => {
    try {
        const agentes = agenteRepository.findAll();
        res.status(200).json(agentes);
    }
    catch (error) {
        next(new ApiError("Erro ao listar agentes.", 400));
    }
};

const getAgentsById = (req, res, next) => {
    try {
        const id = req.params;
        const agentesById = agenteRepository.findById();
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado." });
        }
        res.status(200).json(agente);
    }
    catch (error) {
        next(new ApiError("Erro na busca de agentes.", 400));
    }
};

const postAgents = (req, res, next) => {
    try {
        const newAgent = ({ nome, dataAgente, cargo } = req.body);
        const createAgent = agenteRepository.createAgents(newAgent);
        res.status(201).json(createAgent);
    } catch (error) {
        next(new ApiError("Erro ao criar agentes.", 400));
    }
}

const putAgents = (req, res, next) => {
    try {
        const id = req.params.id;
        const newAgent = ({ nome, dataAgente, cargo } = req.body);
        const updateAgent = agenteRepository.updateAgents(id, newAgent);
        res.status(201).json(updateAgent);
    }
    catch (error) {
        next(new ApiError("Erro ao atualizar os dados", 400),);
    }
}

const patchAgents = (req, res) => {


}

const deleteAgents = (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteado = agenteRepository.deleteAgents(id);
        if(!deleteado){
            return res.status(404).send("Agente não encontrado");
        }
        res.status(204).send();
    } catch {
        next(new ApiError ("Erro ao deletar agente"));
    }
}


module.exports = {
    getAgents,
    getAgentsById,
    postAgents,
    patchAgents,
    deleteAgents
}