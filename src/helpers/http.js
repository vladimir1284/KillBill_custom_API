import pkg from 'follow-redirects';
import fs from 'fs';

const { http } = pkg;

export function httpReqValidation(requestOptions, resolve, reject, fun) {
  http
    .request(requestOptions, function (response) {
      var chunks = [];

      response.on('data', function (chunk) {
        chunks.push(chunk);
      });

      response.on('end', function (chunk) {
        const body = Buffer.concat(chunks);
        const result = body.toString();
        fun(result);
        resolve();
      });

      response.on('error', function (error) {
        console.error(error);
        reject(error);
      });
    })
    .end();
}
