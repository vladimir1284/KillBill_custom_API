import app from '../../src/index.js';
import { assert } from 'chai';
import { expect } from 'chai';
import { should } from 'chai';
import chaiHttp from 'chai-http';
import supertest from 'supertest';

describe('TagDefinition API endpoints', () => {
  let request;
  before(function () {
    request = supertest(app);
  });
  // Add tests for this endpoints here ...
});
