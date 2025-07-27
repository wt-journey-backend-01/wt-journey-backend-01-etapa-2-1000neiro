const casosRepository = require("../repositories/casosRepository");
const { ApiError } = require("../utils/errorHandler");
const { casoSchema } = require("../utils/casosValidation");

const getCasos = (req, res, next) => {
    try {
        const casos = casosRepository.findAll();
        res.status(200).json(casos);
    } catch (error) {
        next(new ApiError("Erro ao listar casos", 500));
    }
};

const getCasoById = (req, res, next) => {
    try {
        const caso = casosRepository.findById(req.params.id);
        if (!caso) throw new ApiError("Caso não encontrado", 404);
        res.status(200).json(caso);
    } catch (error) {
        next(error);
    }
};

const postCaso = (req, res, next) => {
    try {
        const validatedData = casoSchema.parse(req.body);
        const newCaso = casosRepository.create(validatedData);
        res.status(201).json(newCaso);
    } catch (error) {
        const errorMessage = error.errors ? error.errors[0].message : "Erro ao criar caso";
        next(new ApiError(errorMessage, 400));
    }
};

const putCaso = (req, res, next) => {
    try {
        const validatedData = casoSchema.parse(req.body);
        const updatedCaso = casosRepository.update(req.params.id, validatedData);
        if (!updatedCaso) throw new ApiError("Caso não encontrado", 404);
        res.status(200).json(updatedCaso);
    } catch (error) {
        const errorMessage = error.errors ? error.errors[0].message : "Erro ao atualizar caso";
        next(new ApiError(errorMessage, 400));
    }
};

const patchCaso = (req, res, next) => {
    try {
        const validatedData = casoSchema.partial().parse(req.body);
        const updatedCaso = casosRepository.update(req.params.id, validatedData);
        if (!updatedCaso) throw new ApiError("Caso não encontrado", 404);
        res.status(200).json(updatedCaso);
    } catch (error) {
        const errorMessage = error.errors ? error.errors[0].message : "Erro ao atualizar caso";
        next(new ApiError(errorMessage, 400));
    }
};

const deleteCaso = (req, res, next) => {
    try {
        const removed = casosRepository.remove(req.params.id);
        if (!removed) throw new ApiError("Caso não encontrado", 404);
        res.status(204).end();
    } catch (error) {
        next(new ApiError("Erro ao remover caso", 500));
    }
};

module.exports = {
    getCasos,
    getCasoById,
    postCaso,
    putCaso,
    patchCaso,
    deleteCaso
};