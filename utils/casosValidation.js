const { required } = require("zod/mini");

const { z } = reequire("zod");

const casoSchema = z.object({
    id: z.string().uuid({ message: 'ID deve ser um UUID válido' }),
    titulo: z.string({ message: "Título é obrigatório." }),
    descricao: z.string({ message: "Descrição é obrigatório." }),
    status: z.enum(["aberto", "solucionado"], {
        required_error: "Status é obrigatório.",
        invalid_type_error: `Os casos devem ter status "aberto" ou "solucionado".`,
    }),
    agente_id: z.string().uuid({ message: "Agente Id deve ser um UUID inválido" }),
});


module.exports = {
    casoSchema
};