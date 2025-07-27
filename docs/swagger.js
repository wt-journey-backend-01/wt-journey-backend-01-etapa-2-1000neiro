const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API do Departamento de Polícia',
      version: '1.0.0',
      description: 'API para gerenciamento de agentes e casos policiais',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local'
      },
    ],
    components: {
      schemas: {
        Agente: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              example: '401bccf5-cf9e-489d-8412-446cd169a0f1'
            },
            nome: {
              type: 'string',
              example: 'Rommel Carneiro'
            },
            dataDeIncorporacao: {
              type: 'string',
              format: 'date',
              example: '1992-10-04'
            },
            cargo: {
              type: 'string',
              example: 'delegado'
            }
          }
        },
        Caso: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid',
              example: 'f5fb2ad5-22a8-4cb4-90f2-8733517a0d46'
            },
            titulo: {
              type: 'string',
              example: 'Homicídio'
            },
            descricao: {
              type: 'string',
              example: 'Disparos foram reportados às 22:33 na região do bairro União'
            },
            status: {
              type: 'string',
              enum: ['aberto', 'solucionado'],
              example: 'aberto'
            },
            agente_id: {
              type: 'string',
              format: 'uuid',
              example: '401bccf5-cf9e-489d-8412-446cd169a0f1'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'], // Caminho para os arquivos de rotas
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
};