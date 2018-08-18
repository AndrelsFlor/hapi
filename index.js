'use strict'


const Hapi = require('hapi');
const server = new Hapi.Server({ port: 8080, host: 'localhost'});
const secret = 'fit@123400'

const start = async () => {
   
    const validate = async (decoded, request, h) => {
        if (decoded.id === 1 || decoded.id === '1') {
            return { isValid: true };
        } else {
            return { isValid: false };
        }
    }

    await server.register([{
        plugin: require('hapi-router'),
        options: {
            routes: 'resources/**/routes.js'
        }
    },require('hapi-auth-jwt2')])

    server.auth.strategy('jwt', 'jwt',
    { key: secret,
      validate,
      verifyOptions: { ignoreExpiration: true }
    });
  
    server.auth.default('jwt');

    await server.start();

    console.log(`servidor rodando em ${server.info.uri}`);
}

start();