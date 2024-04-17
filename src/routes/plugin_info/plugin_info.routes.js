import { Router } from 'express';
import { prisma } from '../../db/prisma.js';
import { validCredentials } from '../../middleware/auth.js';

const routes = new Router();

// Add routes here ...

export default routes;
