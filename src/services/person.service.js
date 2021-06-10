"use strict"
const personModel = require('../models/person.model');
var mongoose = require('mongoose');

const addPerson = async(person) => {
        const newPerson = new personModel({
                name: person.name,
                last: person.last,
                dni: person.dni,
              });
        return await newPerson.save();
}

const getPersons = async() => {
        return await personModel.find().exec();
}

const getPerson = async(id) => {
        return await personModel.find({_id: mongoose.Types.ObjectId(id)}).exec();
}

const deletePerson = async (id) => {
        return await personModel.findByIdAndRemove(id);
}

const updatePerson = async (id,person) => {
        return await personModel.findOneAndUpdate(id,person);
}


module.exports = {
    addPerson,
    getPerson,
    getPersons,
    deletePerson,
    updatePerson
};