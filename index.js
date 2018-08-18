'use strict'


const Hapi = require('hapi');
const server = new Hapi.Server({ port: 8080, host: 'localhost'});


const start = async () => {
    // Registra plugins do hapi. Este plugin carrega todos os arquivos de rota
    await server.register({
        plugin: require('hapi-router'),
        options: {
            routes: 'resources/**/routes.js'
        }
    })

    await server.start();

    console.log(`servidor rodando em ${server.info.uri}`);
}

start();