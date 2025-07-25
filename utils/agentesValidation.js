const { z } = require("zod");

const agenteSchema = z.object({
    id: z.string().uuid({ message: 'ID deve ser um UUID válido' }),
    nome: z.string().min(3, { message: 'Nome é obrigatório' }),
    dataDeIncorporacao: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Data deve estar no formato YYYY-MM-DD' }),
    cargo: z.string({ message: 'Cargo inválido' }),
});


module.exports = {
    agenteSchema
};