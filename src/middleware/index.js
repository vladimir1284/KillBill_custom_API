import { validCredentials } from './auth.js';

export function applyGlobalMiddleware(app) {
  app.use(validCredentials);
  // use other global's middlewares here...
}
