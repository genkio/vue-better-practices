'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')({ origin: true })
const logger = require('morgan')
const app = express()

app.use(cors)
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('./routes'))

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

module.exports = app
