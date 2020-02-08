const firebase = require('firebase')
require('firebase/database')

const url = 'https://hacker-news.firebaseio.com'
const version = 'v0'

const firebaseConfig = {
  databaseURL: url,
}

firebase.initializeApp(firebaseConfig)

const app = firebase.database().ref(version)

export const findIdsByType = (type, first, last, skip) => {
  if (!skip) {
    skip = 0
  }
  if (first) {
    return app
      .child(`${type}stories`)
      .limitToFirst(first + skip)
      .once('value')
      .then(snapshot => snapshot.val())
      .then(val => val.slice(skip))
  } else if (last) {
    return app
      .child(`${type}stories`)
      .limitToLast(last + skip)
      .once('value')
      .then(snapshot => snapshot.val())
      .then(val => Object.values(val))
  } else {
    return app
      .child(`${type}stories`)
      .once('value')
      .then(snapshot => snapshot.val())
      .then(val => val.slice(skip))
  }
}

export const findItem = id => {
  return app
    .child(`item/${id}`)
    .once('value')
    .then(snapshot => {
      return snapshot.val()
    })
}

export const findItems = ids => {
  return ids.map(id => findItem(id))
}

export default { findIdsByType, findItem, findItems }
