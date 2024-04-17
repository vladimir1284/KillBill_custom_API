import express from 'express';
import router from './routes/routes.js';
import swaggerSetup from './documentation/swagger.js';

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use('/1.0/kb', router);
swaggerSetup(app, port);

// Middleware to handle unregistered routes
app.use((req, res) => {
  res.status(404).send('The requested route does not exist');
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

export default app;
