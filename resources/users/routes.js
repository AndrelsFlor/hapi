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
}]
