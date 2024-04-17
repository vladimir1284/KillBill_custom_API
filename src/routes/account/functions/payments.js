import { prisma } from '../../../db/prisma.js';
import catchError from '../../../security/catch_errors.js';

export async function getPayments(req, res) {
  try {
    const {
      limit = 100,
      offset = 0,
      account_id,
      order = 'UPDATED',
    } = req.query;

    const orderBy = {};
    if (order.toUpperCase() === 'UPDATED') orderBy.updated_date = 'desc';
    else if (order.toUpperCase() === 'CREATED') orderBy.created_date = 'desc';

    const payments = await prisma.payments.findMany({
      take: parseInt(limit),
      skip: parseInt(offset),
      where: {
        account_id: account_id || undefined,
      },
      orderBy,
    });

    res.json(payments);
  } catch (error) {
    catchError(error);
  }
}
