'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  console.log('data is data, data')
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = (data) => {
  console.log('data is data, data, data')
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
    // data: data
  })
}

const signOut = (data) => {
  console.log('sign out blah')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

const changePassword = (data) => {
  console.log('inside changePassword, data is i', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
