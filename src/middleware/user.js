import catchError from '../security/catch_errors.js';
import { httpReqValidation } from '../helpers/http.js';

const kb_HOST = process.env.KB_APP_HOST;
const kb_PORT = process.env.KB_APP_PORT;

export async function userInfo(req, res, next) {
  var requestOptions = {
    method: 'GET',
    hostname: kb_HOST,
    port: kb_PORT,
    path: '/1.0/kb/...',
    headers: req.headers,
    maxRedirects: 20,
  };

  requestOptions.path = `/1.0/kb/security/subject`;
  await new Promise((resolve, reject) => {
    httpReqValidation(requestOptions, resolve, reject, (result) => {
      console.log(result);
    });
  });

  requestOptions.path = `/1.0/kb/security/permissions`;
  await new Promise((resolve, reject) => {
    httpReqValidation(requestOptions, resolve, reject, (result) => {
      console.log(result);
    });
  });
}
