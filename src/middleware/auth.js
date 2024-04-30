// import { decode } from "base-64";
import decrypt from '../security/decrypt.js';
import { prisma } from '../db/prisma.js';
import catchError from '../security/catch_errors.js';
import { validCredentials2 } from './auth2.js';

export async function validCredentials(req, res, next) {
  if (process.env.BUILDING === 'true') {
    console.log('>>> ⚠️ Skipping middleware, BUILDING mode is true');
    next();
    return;
  }

  try {
    // Extract headers
    const {
      'x-killbill-apikey': req_kb_apiKey,
      'x-killbill-apisecret': req_kb_apiSecret,
      'x-killbill-comment': req_kb_comment,
      'x-killbill-createdby': req_kb_createdBy,
      'x-killbill-reason': req_kb_reason,
    } = req.headers;

    // Extract and decode basic authentication header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return res
        .status(401)
        .send('Unauthorized: Missing or invalid authorization header');
    }

    const base64Credentials = authHeader.split(' ')[1];
    const [user, password] = Buffer.from(base64Credentials, 'base64')
      .toString()
      .split(':');

    // Check if user credentials match
    if (
      user !== process.env.KB_AUTH_USER ||
      password !== process.env.KB_AUTH_PASSWORD
    ) {
      return res.status(401).send('Unauthorized: Invalid user credentials');
    }

    // Decrypt the req_kb_apiSecret
    const decryptedSecret = decrypt(req_kb_apiSecret);

    // Query database to validate tenant credentials
    const tenant = await prisma.tenants.findFirst({
      where: {
        api_key: req_kb_apiKey,
        // api_secret: decryptedSecret,   // I don't use this anymore
      },
    });

    if (!tenant) {
      return res.status(403).send('Forbidden: Invalid tenant credentials');
    }

    // Check if credentials request isn't wrong (+tenant and user)
    await validCredentials2(req, res, next);

    // Authentication successful, proceed to next middleware
    if (!res.headersSent) next();
  } catch (error) {
    catchError(error);
  }
}
