const agenteRepository = require("../repositories/agentesRepository");
const { ApiError } = require("../utils/errorHandler");
const { agenteSchema } = require("../utils/agentesValidation");

const getAgents = (req, res, next) => {
    try {
        const agentes = agenteRepository.findAll();
        res.status(200).json(agentes);
    } catch (error) {
        next(new ApiError("Erro ao listar agentes.", 500));
    }
};

const getAgentsById = (req, res, next) => {
    try {
        const { id } = req.params;
        const agente = agenteRepository.findById(id);
        if (!agente) {
            throw new ApiError("Agente não encontrado.", 404);
        }
        res.status(200).json(agente);
    } catch (error) {
        next(error);
    }
};

const postAgents = (req, res, next) => {
    try {
        const validatedData = agenteSchema.parse(req.body);
        const newAgent = agenteRepository.createAgents(validatedData);
        res.status(201).json(newAgent);
    } catch (error) {
        next(new ApiError(error.errors?.map(e => e.message).join(", ") || "Erro ao criar agente", 400));
    }
};

const putAgents = (req, res, next) => {
    try {
        const { id } = req.params;
        const validatedData = agenteSchema.parse(req.body);
        const updatedAgent = agenteRepository.updateAgents(id, validatedData);
        if (!updatedAgent) {
            throw new ApiError("Agente não encontrado", 404);
        }
        res.status(200).json(updatedAgent);
    } catch (error) {
        next(new ApiError(error.errors?.map(e => e.message).join(", ") || "Erro ao atualizar agente", 400));
    }
};

const patchAgents = (req, res, next) => {
    try {
        const { id } = req.params;
        const validatedData = agenteSchema.partial().parse(req.body);
        const updatedAgent = agenteRepository.patchAgents(id, validatedData);
        if (!updatedAgent) {
            throw new ApiError("Agente não encontrado", 404);
        }
        res.status(200).json(updatedAgent);
    } catch (error) {
        next(new ApiError(error.errors?.map(e => e.message).join(", ") || "Erro ao atualizar agente", 400));
    }
};

const deleteAgents = (req, res, next) => {
    try {
        const { id } = req.params;
        const deleted = agenteRepository.deleteAgents(id);
        if (!deleted) {
            throw new ApiError("Agente não encontrado", 404);
        }
        res.status(204).end();
    } catch (error) {
        next(new ApiError("Erro ao deletar agente", 500));
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