import packageInfo from './../../package.json' assert { type: 'json' };

const API_route = './src/routes/**/*.js';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: packageInfo.name || 'KILLBILL Custom API',
      version: packageInfo.version || '1.0.0',
      description:
        packageInfo.description ||
        "This is a RESTful API built with Node.js Express, designed to serve CUSTOM data from Killbill's database to the Fleet-Towit client. It handles only the GET operation to avoid conflicts with Killbill's internal event chain. It can handle requests for one or multiple resources, and complies with Killbill's authentication system.",
    },
  },
  apis: [API_route],
};

export default options;
