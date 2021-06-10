"use strict"
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
  name:  String,
  last:  String,
  dni:   String,
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

var Person = mongoose.model('Person', personSchema);
module.exports = Person;