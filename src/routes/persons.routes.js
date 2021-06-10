"use strict"
const app = require('express');
const api = app.Router();

const catchWrapper  = require('../utils/catchWrapper');
const { validationSchema } = require('../utils/validationSchema');
const { 
    getPersonSchema,
    createPersonSchema,
    updatePersonSchema
} = require('../schemas/person.schema');

const personController = require('../controllers/persons.controller');

// -----//-----//------//   PERSON ROUTES    // -----//-----//------//
api.post('/persons', validationSchema(createPersonSchema) ,catchWrapper(personController.addPerson));
api.get('/persons/:id', validationSchema(getPersonSchema), catchWrapper(personController.getPerson));
api.get('/persons', catchWrapper(personController.getPersons));
api.delete('/persons/:id',validationSchema(getPersonSchema),catchWrapper(personController.deletePerson));
api.put('/persons/:id',validationSchema(updatePersonSchema, 'params'),validationSchema(createPersonSchema),catchWrapper(personController.updatePerson));

module.exports = api;