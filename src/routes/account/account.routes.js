import { Router } from 'express';
import { validCredentials } from '../../middleware/auth.js';
import { getPayments } from './functions/payments.js';
import { getInvoices, getFirstInvoiceToPay } from './functions/invoices.js';

const routes = new Router();

/**
 * @swagger
 * /1.0/kb/accounts/payments:
 *   get:
 *     summary: Retrieve a list of payments
 *     description: Fetches a list of payments based on query parameters such as account ID, and allows sorting and pagination.
 *     tags:
 *       - Account
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 100
 *         description: Maximum number of payments to return.
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of payments to skip before starting to collect the result set.
 *       - in: query
 *         name: account_id
 *         schema:
 *           type: string
 *         description: Account ID to filter payments by account.
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           default: 'UPDATED'
 *         description: Order of the payments returned, options are 'UPDATED' or 'CREATED' with default as 'UPDATED'.
 *     responses:
 *       200:
 *         description: A JSON array of payments.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Bad request if the parameters are incorrectly specified.
 *       500:
 *         description: Internal server error due to a problem in the server.
 *     security:
 *       - ApiKeyAuth: []
 */
routes.get('/payments', validCredentials, getPayments);

/**
 * @swagger
 * /1.0/kb/accounts/invoices:
 *   get:
 *     summary: Retrieve a list of invoices
 *     description: Fetch a list of invoces with optional pagination and sorting parameters. Requires valid credentials.
 *     tags:
 *       - Account
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 100
 *         description: Maximum number of invoices to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: Number of invoices to skip before starting to collect the result set
 *       - in: query
 *         name: account_id
 *         schema:
 *           type: string
 *         description: Account ID to filter invoices by account
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           default: 'INVOICE'
 *         description: Order of the invoices returned ('INVOICE' for invoice_date, 'CREATED' for created_date)
 *     responses:
 *       200:
 *         description: A JSON array of invoices
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Invoice'
 *     security:
 *       - ApiKeyAuth: []
 */
routes.get('/invoices', validCredentials, getInvoices);

/**
 * @swagger
 * /1.0/kb/accounts/firstInvoiceToPay:
 *   get:
 *     summary: Retrieve the first invoice to pay
 *     description: Fetches the first available invoice that needs to be paid. This endpoint is currently under development, and the criteria for determining which invoice to pay first are yet to be implemented.
 *     tags:
 *       - Account
 *     parameters:
 *       - in: query
 *         name: audit
 *         schema:
 *           type: string
 *           default: 'NONE'
 *         description: Audit parameter to specify additional logging or checks (not yet implemented)
 *     responses:
 *       200:
 *         description: An object containing the first invoice to pay
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 invoice_date:
 *                   type: string
 *                   format: date-time
 *                 amount:
 *                   type: number
 *                 status:
 *                   type: string
 *       400:
 *         description: Bad request if the parameters are incorrect
 *       500:
 *         description: Internal server error
 */
routes.get('/firstInvoiceToPay', validCredentials, getFirstInvoiceToPay);

export default routes;
