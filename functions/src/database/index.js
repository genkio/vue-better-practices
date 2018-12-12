'use strict'

const admin = require('firebase-admin')

function getData (path) {
  return admin
    .database()
    .ref(path)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(Object.values)
}

module.exports = {
  getData
}
