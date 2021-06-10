"use strict"
const service = require('../services/person.service');

const addPerson = async (req, res) => {
    const person = req.body;
    const response = await service.addPerson(person);
    
    return res.status(200).json({message:'Person created success', data: response});
}

const getPerson = async (req, res) => {
    const person = await service.getPerson(req.params.id);
    if(person.length)
        res.status(200).json(person);
    else
        res.status(500).json({error:'There was a problem, please try again'});
}

const getPersons = async (req, res) => {
    const persons = await service.getPersons();
    if(persons.length)
        res.status(200).json(persons);
    else
        res.status(500).json({error:'There was a problem, please try again'});
}

const deletePerson = async (req, res) => {
    const response = await service.deletePerson(req.params.id);
    if(response)
        return res.status(200).json({message:'Person deleted success'});
    else
        return res.status(500).json({message:'There was a problem deleting this person'});

}

const updatePerson = async (req, res) => {
    const response = await service.updatePerson(req.params.id, req.body);
    
    if(response)
        return res.status(200).json({message:'Person updated success'});
    else
        return res.status(500).json({message:'There was a problem updating this person'});
}

module.exports = {
    addPerson,
    getPerson,
    getPersons,
    deletePerson,
    updatePerson,
};