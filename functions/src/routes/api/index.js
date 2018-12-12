'use strict'

const router = require('express').Router()

router.use('/categories', require('./categories'))
router.use('/shop-items', require('./shop-items'))

module.exports = router
