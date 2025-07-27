const { z } = require('zod');

const agenteSchema = z.object({
    nome: z.string().min(3),
    dataDeIncorporacao: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    cargo: z.string().min(3)
});

module.exports = { agenteSchema };