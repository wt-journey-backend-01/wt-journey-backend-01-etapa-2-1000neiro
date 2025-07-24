const agenteRepository = require("../repositories/agentesRepository");
const ApiError = require("../utils/errorHandler");

class ApiError extends Error{
    constructor(message , statusCode = 500){
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
        next(new ApiError("Erro ao listar agentes."));
    }
};

const getAgentsById = (req, res, next) => {
    try {
        const id = req.params;
        const agentesById = agenteRepository.findById();
        if(!agente){
            return res.status(404).json({ message: "Agente não encontrado." }); 
        }
        res.status(200).json(agente);
    }
    catch (error) {
        next(new ApiError ("Erro na busca de agentes."));
    }
};

const postAgents = (req, res , next) =>{
    try{

    }catch(error){
        next (new ApiError ("Erro ao criar agentes.",));
    }
}