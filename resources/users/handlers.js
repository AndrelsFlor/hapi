'use strict' 

const Boom = require('boom');
const jwt = require('jsonwebtoken'); 
const secret = 'fit@123400';



exports.create = (request, h) => {
    const { username, password } = request.payload;

    //pseudo código pra simular um user que já existe no BD
    if (username === 'andre') {
        throw Boom.badData('Este usuário já existe');
    } else {
        const response = h.response({
            success: true
        });

        response.type('application/json');
        return response;
    }
};

exports.login = (request, h) => {
    console.log('entrou login');
    const { username, password } = request.payload;

    //pseudo código pra simular um login

    if (username === 'teste' && password === '123') {
        console.log('entrou if login');
        const token = jwt.sign({id: 1}, secret);
        const response = h.response({token});
        response.type('application/json');
        return response;
    }
}

