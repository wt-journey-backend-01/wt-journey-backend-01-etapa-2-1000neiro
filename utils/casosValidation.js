const { z } = require('zod');

const casoSchema = z.object({
    titulo: z.string().min(3),
    descricao: z.string().min(10),
    status: z.enum(['aberto', 'solucionado']),
    agente_id: z.string().uuid()
});

module.exports = { casoSchema };