import { prisma } from '../../../db/prisma.js';
import catchError from '../../../security/catch_errors.js';

export async function getInvoices(req, res) {
  try {
    const {
      limit = 100,
      offset = 0,
      account_id,
      order = 'INVOICE',
    } = req.query;

    const orderBy = {};
    if (order.toUpperCase() === 'INVOICE') orderBy.invoice_date = 'desc';
    else if (order.toUpperCase() === 'CREATED') orderBy.created_date = 'desc';

    const invoices = await prisma.invoices.findMany({
      take: parseInt(limit),
      skip: parseInt(offset),
      where: {
        account_id: account_id || undefined,
      },
      orderBy,
    });

    res.json(invoices);
  } catch (error) {
    catchError(error);
  }
}

export async function getFirstInvoiceToPay(req, res) {
  try {
    const { audit = 'NONE' } = req.query;

    const invoice = await prisma.invoices.findFirst({});
    // TODO buscar cómo determinar cuál es el que se debe devolver

    res.json(invoice);
  } catch (error) {
    catchError(error);
  }
}
