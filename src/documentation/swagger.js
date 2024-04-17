import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import options from './swagger.config.js';

const swaggerSpecs = swaggerJsDoc(options);

export default function swaggerDocs(app, port) {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpecs);
  });
  console.log(`📃 API Docs are available on http://localhost:${port}/api/docs`);
}

// TODO generar etiquetas y ruta de inicio en el swagger automaticamente en dependencia de la ruta en que se encuentre el archivo, el router.get
// TODO generar sistema autenticación en swagger
// TODO generar los schema del swagger a partir de la bbdd
