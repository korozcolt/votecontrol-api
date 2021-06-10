"use strict"

const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const getPersonSchema = Joi.object({
  id: Joi.objectId()
});

const createPersonSchema = Joi.object({
  name: Joi.string().required(),
  last: Joi.string().required(),
  dni: Joi.string().required()
})

const updatePersonSchema = Joi.object({
  id: Joi.objectId()
});

module.exports = {
    getPersonSchema,
    createPersonSchema,
    updatePersonSchema
};