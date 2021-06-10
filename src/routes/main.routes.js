"use strict"

const router = require('express').Router();

router.use('/v1',require('./persons.routes'));

module.exports = router;