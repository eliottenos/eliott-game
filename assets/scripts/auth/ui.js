'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log(data)
  // store user
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log(data)
}

const changePasswordFailure = (error) => {
  console.log(error)
}

const signOutSuccess = (data) => {
  console.log('success sign out')
  store.user = null
}

const signOutFailure = (error) => {
  console.log('error on sign out in ', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
