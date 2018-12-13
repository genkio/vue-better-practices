'use strict'

const router = require('express').Router()
const Database = require('../../database')

router.get('/', async (req, res) => {
  const { categoryId } = req.query
  try {
    const shopItems = await Database.getDataByProp('shop-items', 'category_id', Number(categoryId))
    res.status(200).json(shopItems)
  } catch (err) {
    console.error(err.message)
    res.status(500).json(err.message)
  }
})

router.get('/:id', async (req, res) => {
  const { id: shopItemId } = req.params
  try {
    const [ shopItem ] = await Database.getDataByProp('shop-items', 'id', Number(shopItemId))
    res.status(200).json(shopItem)
  } catch (err) {
    console.error(err.message)
    res.status(500).json(err.message)
  }
})

module.exports = router
