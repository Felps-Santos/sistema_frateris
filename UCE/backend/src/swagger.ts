import swaggerJsdoc from 'swagger-jsdoc';
const options: swaggerJsdoc.Options = 
{ definition: { openapi: '3.0.0', 
    info: { title: 'API Pessoas', 
        version: '1.0.0', 
        description: 'CRUD de Pessoas com Prisma', }, 
        servers: [{ url: 'http://localhost:3000' }], }, 
        apis: ['./src/routes/*.ts'],
    }
 export const swaggerSpec = swaggerJsdoc(options)