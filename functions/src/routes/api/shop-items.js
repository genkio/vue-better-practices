'use strict'

const router = require('express').Router()
const Database = require('../../database')

router.get('/', async (req, res) => {
  try {
    const categories = await Database.getData('/shop-items')
    res.status(200).json(categories)
  } catch (err) {
    console.error(err.message)
    res.status(500).json(err.message)
  }
})

module.exports = router
