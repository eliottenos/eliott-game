'use strict'

const store = require('../store.js')
const gameLogic = require('../game-logic.js')
console.log('game logic is ', gameLogic)
// const newGame = require('../game-logic.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('.auth').text('You successully signed up!')
}

const signUpFailure = (error) => {
  console.log(error)
  $('.auth').text('Email already taken or password does not match')
}

const signInSuccess = (data) => {
  console.log(data)
  $('.auth').text('You successully signed in!')
  $('.gameBoard').show()
  console.log(gameLogic) // log it to see if it has a method .newGame()
  // gameLogic.newGame()
  gameLogic.startGame()
  // change display property with jq
  // store user
  store.user = data.user
}

const signInFailure = (error) => {
  console.log(error)
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

const getGamesSuccess = (data) => {
  const games = data.games
  const gamesIds = []
  // console.log(data.games.length)
  // console.log(data.games)
  const idGetter = function () {
    for (let i = 0; i < games.length; i++) {
      gamesIds.push(games[i].id)
    }
  }
  idGetter()
  // console.log(gamesIds)
  // console.log(data.games[0].id)
  $('.auth').text('You have played ' + data.games.length + ' games. Their IDs are: ' + gamesIds)
}

const getGamesFailure = (data) => {
  $('.auth').text('Please try again.')
}

const getGameSuccess = (data) => {
  // console.log(data)
  if (data.game.over) {
    $('#auth-message').text('You have finished that game successfully')
  } else {
    $('#auth-message').text('That game was not finished!')
  }
}

const getGameFailure = (data) => {
  $('#auth-message').text('Please provide a different ID')
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
  getGamesSuccess,
  getGamesFailure,
  getGameSuccess,
  getGameFailure
  // newGame
}
