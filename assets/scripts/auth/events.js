'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const createGame = function (event) {
  event.preventDefault()
  api.createGame()
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('inside of onChangePassword')
  const data = getFormFields(event.target)
  api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.updateGame(data) // here you pass in a data object to updateGame()
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const addHandlers = () => {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  addHandlers,
  onUpdateGame,
  createGame
}
