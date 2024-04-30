import catchError from '../security/catch_errors.js';
import { httpReqValidation } from '../helpers/http.js';

const kb_HOST = process.env.KB_APP_HOST;
const kb_PORT = process.env.KB_APP_PORT;

export async function validCredentials2(req, res, next) {
  var tenantId, externalKey, apiKey;

  const { 'x-killbill-apikey': req_kb_apiKey } = req.headers;

  var requestOptions = {
    method: 'GET',
    hostname: kb_HOST,
    port: kb_PORT,
    path: '/1.0/kb/...',
    headers: req.headers,
    maxRedirects: 20,
  };
  try {
    // Tenants validations requests
    requestOptions.path = `/1.0/kb/tenants?apiKey=${req_kb_apiKey}`;
    await new Promise((resolve, reject) => {
      httpReqValidation(requestOptions, resolve, reject, (result) => {
        if (!result) {
          return res
            .status(401)
            .send(`KillBill error 401: Invalid user credentials in middleware`);
        }
        try {
          result = JSON.parse(result);
        } catch (e) {
          return res
            .status(401)
            .send(`KillBill error 401: Invalid user credentials in middleware`);
        }
        if (!result.tenantId || result.tenantId == undefined) {
          let message = 'KillBill error => ';

          if (result.causeMessage) message += result.causeMessage;
          else if (result.message) message += result.message;
          else
            message =
              'KillBill error 401: Invalid tenant credentials in middleware';

          return res.status(401).send(`${message}`);
        } else {
          if (result.tenantId) tenantId = result.tenantId;
          if (result.externalKey) externalKey = result.externalKey;
          if (result.apiKey) apiKey = result.apiKey;
        }
      });
    });

    requestOptions.path = `/1.0/kb/tenants/${tenantId}`;
    await new Promise((resolve, reject) => {
      httpReqValidation(requestOptions, resolve, reject, (result) => {
        if (!result) {
          return res
            .status(401)
            .send(`KillBill error 401: Invalid user credentials in middleware`);
        }

        try {
          result = JSON.parse(result);
        } catch (e) {
          return res
            .status(401)
            .send(
              `KillBill error 401: Invalid tenant credentials in middleware`
            );
        }
      });
    });

    // Authentication successful, proceed to continue in middleware auth1
  } catch (error) {
    catchError(error);
  }
}
