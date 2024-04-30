import fs from 'fs';

export default function catchError(
  error,
  res,
  message = 'Internal Server Error',
  code = 500
) {
  console.error(message, error.message);
  fs.appendFileSync(
    'error.log',
    `${new Date().toISOString()} - ${message} : ${error}\n`
  );

  if (res && !res.headersSent) {
    if (code == 500) res.status(500).send(message);
    else res.status(code).send(message);
  }
}
