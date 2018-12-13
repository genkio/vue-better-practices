'use strict'

const admin = require('firebase-admin')
const DEFAULT_DATA_PER_PAGE = 10
const DEFAULT_PAGINATED_BY = 'id'

function _getOnce (path) {
  return admin
    .database()
    .ref(path)
    .once('value')
    .then(snapshot => snapshot.val())
}

function getAllData (path) {
  return _getOnce(path)
    .then(Object.values)
}

function getPaginatedData (
  path,
  lastId,
  paginatedBy = DEFAULT_PAGINATED_BY,
  limit = DEFAULT_DATA_PER_PAGE
) {
  return admin
    .database()
    .ref(path)
    .orderByChild(paginatedBy)
    .startAt(lastId)
    .limitToFirst(limit)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(Object.values)
}

function getDataByProp (path, prop, value) {
  return admin
    .database()
    .ref(path)
    .orderByChild(prop)
    .equalTo(value)
    .once('value')
    .then(snapshot => snapshot.val())
    .then(Object.values)
}

module.exports = {
  getAllData,
  getDataByProp,
  getPaginatedData
}
