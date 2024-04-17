import app from '../../src/index.js';
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import chaiHttp from 'chai-http';
import supertest from 'supertest';

describe('Account API endpoints', () => {
  let request;
  before(function () {
    request = supertest(app);
  });

  describe('GET /1.0/kb/accounts/invoices/firstInvoiceToPay', () => {
    it('should retrieve the first invoice to pay', async () => {
      const res = await request.get('/1.0/kb/accounts/firstInvoiceToPay');
      expect(res).to.have.status(200);
      // Add more specific tests here based on your expected response
    });
  });
  // Add tests for this endpoints here ...
});
