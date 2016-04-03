var expect = require('chai').expect;

module.exports = {
  constructorError: /express-openapi-security: Security handlers must be functions.  Non function given for scheme "keyScheme"/,
  path: '/',
  headers: null,

  securityDefinitions: {
    keyScheme: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header'
    },
    keyScheme1: {
      type: 'apiKey',
      name: 'api_key1',
      in: 'header'
    },
    keyScheme2: {
      type: 'apiKey',
      name: 'api_key2',
      in: 'header'
    }
  },

  securityHandlers: {
    keyScheme: true
  },

  operationSecurity: [
    {
      keyScheme: ['write'],
      keyScheme1: ['write']
    },
    {
      keyScheme2: ['write'],
      keyScheme1: ['write']
    }
  ],

  expectationMiddleware: function(req, res, next) {
    next();
  },

  expectedStatusCode: 200,
  expectedResponse: '"woo"'
};
