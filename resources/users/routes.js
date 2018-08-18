'use strict'

const Joi = require('joi');
const handlers = require('./handlers');

module.exports = [{
    method: 'POST',
    path:'/api/v1/users',
    handler: handlers.create,
    config: {
       validate: {
            payload: Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required()
            })
        }
    }
}, {
    method: 'POST',
    path: '/api/v1/users/login',
    handler: handlers.login,
    config: {
        auth: false,
        validate: {
            payload: Joi.object({
                username: Joi.string().required(),
                password: Joi.string().required()
            })
        }
    }
}]
