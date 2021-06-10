"use strict"

const boom = require('@hapi/boom');
//const joi = require('@hapi/joi');

function validate(data, schema) {
    const { error } = schema.validate(data);
    return error;
}

exports.validationSchema = (schema, check='body') => {
    return function (req, res, next) {
        let error = validate(req[check], schema);
        if (error) {
            error = boom.badRequest(error);
            error.status = error.output.statusCode
            next(error);
        } else {
            next();
        }
    }
}