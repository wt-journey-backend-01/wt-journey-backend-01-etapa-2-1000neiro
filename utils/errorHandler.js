class ApiError extends Error {
    constructor(status, message, error = {}) {
        super(message);
        this.status;
        this.error

    }
};

module.exports = {
    ApiError
}


//error feito corretamente