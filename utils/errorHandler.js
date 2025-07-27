class ApiError extends Error {
    constructor(message, statusCode, errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
    }
}

const errorHandler = (err, req, res, next) => {
    console.error(err);
    
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message,
            errors: err.errors
        });
    }

    res.status(500).json({
        status: 'error',
        message: 'Erro interno no servidor'
    });
};

module.exports = { ApiError, errorHandler };