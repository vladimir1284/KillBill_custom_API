# KILLBILL Custom API

This is a RESTful API built with Node.js Express, designed to serve CUSTOM data from Killbill's database to the Fleet-Towit client. It handles only the GET operation to avoid conflicts with Killbill's internal event chain. It can handle requests for one or multiple resources, and complies with Killbill's authentication system.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

1. You need to have [Node.js](https://nodejs.org) and [Docker](https://www.docker.com/products/docker-desktop) and `docker-compose` installed on your machine.
2. Config your the follow Docker machine ( [Guide 4 running Kill Bill ](https://wiki.ladetec.com/es/developer/deployment/killbill))

### Installing

1. Clone the repository
2. Clone `.env.example` and rename for `.env` then fill the values with your [Kill Bill stacks](https://wiki.ladetec.com/es/developer/deployment/killbill):
3. Install the dependencies with `npm install`
4. And Happy coding :)

## Running the app

You can run the app with the following npm script:

```bash
npm start
```

For development, you can use:

```bash
npm run dev
```

## Running the tests

You can run the tests with the following npm script:

```bash
npm test
```

## Built With

- [@prisma/client](https://www.prisma.io/client/): Prisma Client is an auto-generated database client that enables type-safe database access and reduces boilerplate. You can use it as an alternative to traditional ORMs such as Sequelize, TypeORM.
- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc): Generates swagger doc based on JSDoc.
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express): This module allows you to serve auto-generated swagger-ui generated API docs from express, based on a swagger.json or swagger.yaml file.
- [chai](https://www.chaijs.com/): Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
- [chai-http](https://www.npmjs.com/package/chai-http): Plugin for Chai to allow HTTP integration testing with Chai assertions.
- [mocha](https://mochajs.org/): Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
- [supertest](https://www.npmjs.com/package/supertest): SuperTest is a super-flexible library that allows you to test HTTP servers using a fluent API.
