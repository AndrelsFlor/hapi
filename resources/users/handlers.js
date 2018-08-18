'use strict'

const Boom = require('boom');

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
}
