const agenteRepository = require("../repositories/agentesRepository");
const { ApiError } = require("../utils/errorHandler");
const { agenteSchema } = require("../utils/agentesValidation");

const getAgents = (req, res, next) => {
    try {
        const agentes = agenteRepository.findAll();
        res.status(200).json(agentes);
    } catch (error) {
        next(new ApiError("Erro ao listar agentes", 500));
    }
};

const getAgentsById = (req, res, next) => {
    try {
        const agente = agenteRepository.findById(req.params.id);
        if (!agente) throw new ApiError("Agente não encontrado", 404);
        res.status(200).json(agente);
    } catch (error) {
        next(error);
    }
};

const postAgents = (req, res, next) => {
    try {
        const validatedData = agenteSchema.parse(req.body);
        const newAgent = agenteRepository.create(validatedData);
        res.status(201).json(newAgent);
    } catch (error) {
        const errorMessage = error.errors ? error.errors[0].message : "Erro ao criar agente";
        next(new ApiError(errorMessage, 400));
    }
};

const putAgents = (req, res, next) => {
    try {
        const validatedData = agenteSchema.parse(req.body);
        const updatedAgent = agenteRepository.update(req.params.id, validatedData);
        if (!updatedAgent) throw new ApiError("Agente não encontrado", 404);
        res.status(200).json(updatedAgent);
    } catch (error) {
        const errorMessage = error.errors ? error.errors[0].message : "Erro ao atualizar agente";
        next(new ApiError(errorMessage, 400));
    }
};

const patchAgents = (req, res, next) => {
    try {
        const validatedData = agenteSchema.partial().parse(req.body);
        const updatedAgent = agenteRepository.update(req.params.id, validatedData);
        if (!updatedAgent) throw new ApiError("Agente não encontrado", 404);
        res.status(200).json(updatedAgent);
    } catch (error) {
        const errorMessage = error.errors ? error.errors[0].message : "Erro ao atualizar agente";
        next(new ApiError(errorMessage, 400));
    }
};

const deleteAgents = (req, res, next) => {
    try {
        const removed = agenteRepository.remove(req.params.id);
        if (!removed) throw new ApiError("Agente não encontrado", 404);
        res.status(204).end();
    } catch (error) {
        next(new ApiError("Erro ao remover agente", 500));
    }
};

module.exports = {
    getAgents,
    getAgentsById,
    postAgents,
    putAgents,
    patchAgents,
    deleteAgents
};