const agenteRepository = require("../repositories/agentesRepository");
const ApiError = require("../utils/errorHandler");
const agenteSchema = require("../utils/agentesValidation");

class ApiError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.name = "ApiError";
        this.statusCode = statusCode;
    }
}

const getAgents = (req, res, next) => {
    try {
        const agentes = agenteRepository.findAll();
        res.status(200).json(agentes);
    } catch (error) {
        next(new ApiError("Erro ao listar agentes.", 400));
    }
};

const getAgentsById = (req, res, next) => {
    try {
        const id = req.params.id; // Corrigido para pegar o id corretamente
        const agente = agenteRepository.findById(id); // Chamada correta ao repositório
        if (!agente) {
            return res.status(404).json({ message: "Agente não encontrado." });
        }
        res.status(200).json(agente);
    } catch (error) {
        next(new ApiError("Erro na busca de agentes.", 400));
    }
};

const postAgents = (req, res, next) => {
    try {
        const newAgent = req.body; // Simplificado
        const createAgent = agenteRepository.createAgents(newAgent);
        res.status(201).json(createAgent);
    } catch (error) {
        next(new ApiError("Erro ao criar agentes.", 400));
    }
};

const putAgents = (req, res, next) => {
    try {
        const id = req.params.id;
        const newAgent = req.body; // Simplificado
        const updateAgent = agenteRepository.updateAgents(id, newAgent);
        res.status(200).json(updateAgent); // Alterado para 200 OK
    } catch (error) {
        next(new ApiError("Erro ao atualizar os dados", 400));
    }
};

const patchAgents = (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body; // Dados a serem atualizados
        const updatedAgent = agenteRepository.patchAgents(id, updatedData); // Método para atualizar parcialmente
        if (!updatedAgent) {
            return res.status(404).json({ message: "Agente não encontrado." });
        }
        res.status(200).json(updatedAgent);
    } catch (error) {
        next(new ApiError("Erro ao atualizar os dados do agente.", 400));
    }
};

const deleteAgents = (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteado = agenteRepository.deleteAgents(id);
        if (!deleteado) {
            return res.status(404).send("Agente não encontrado");
        }
        res.status(204).send();
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
