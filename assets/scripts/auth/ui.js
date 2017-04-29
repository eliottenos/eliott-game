'use strict'

const store = require('../store.js')
const gameLogic = require('../game-logic.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('.auth').text('You successully signed up!')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.auth').text('Email already taken or password does not match')
}

const signInSuccess = (data) => {
  console.log(data)
  $('.auth').text('You successully signed in!')
  gameLogic.newGame()
  // change display property with jq
  // store user
  store.user = data.user
}

const signInFailure = (error) => {
  console.error(error)
  $('.auth').text('Your email or password is incorrect')
}

const changePasswordSuccess = (data) => {
  console.log(data)
  $('.auth').text('You changed your password!')
}

const changePasswordFailure = (error) => {
  console.log(error)
  $('.auth').text('Your password is incorrect')
}

const signOutSuccess = (data) => {
  console.log('success sign out')
  $('.auth').text('You signed out!')
  store.user = null
  $('.gameBoard').hide()
}

const signOutFailure = (error) => {
  console.log('error on sign out in ', error)
}

const onGameCreateSuccess = (data) => {
  console.log('successful new game ', data)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  onGameCreateSuccess
}
