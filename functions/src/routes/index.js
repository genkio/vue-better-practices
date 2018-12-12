'use strict'

const router = require('express').Router()

// NOTE: the /api path had already been created during cloud function creation
router.use('/', require('./api'))

module.exports = router
