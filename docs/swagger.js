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
              format: 'uuid'
            },
            nome: {
              type: 'string'
            },
            dataDeIncorporacao: {
              type: 'string',
              format: 'date'
            },
            cargo: {
              type: 'string'
            }
          }
        },
        Caso: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              format: 'uuid'
            },
            titulo: {
              type: 'string'
            },
            descricao: {
              type: 'string'
            },
            status: {
              type: 'string',
              enum: ['aberto', 'solucionado']
            },
            agente_id: {
              type: 'string',
              format: 'uuid'
            }
          }
        }
      }
    }
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
};