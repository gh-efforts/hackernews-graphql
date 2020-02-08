const firebase = require('firebase')
require('firebase/database')

const url = 'https://hacker-news.firebaseio.com'
const version = 'v0'

const firebaseConfig = {
  databaseURL: url,
}

firebase.initializeApp(firebaseConfig)

const app = firebase.database().ref(version)

export const findIdsByType = type => {
  return app
    .child(`${type}stories`)
    .once('value')
    .then(snapshot => {
      return snapshot.val()
    })
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
