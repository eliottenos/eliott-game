'use strict'

const updateGame = require('./auth/api.js').updateGame
const api = require('./auth/api.js')
const store = require('./store.js')
const getGamesSuccess = require('./auth/ui.js')
// const ui = require('./auth/ui.js')

let gameBoard = ['', '', '', '', '', '', '', '', '']

let turn = 'X'

const resetGame = function () {
  console.log('im in reset game')
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').html('')
  addClickEvents()
}

const addClickEvents = function () {
  api.updateGame()
  // update game needs to be called every time this function is invoked
  // pass object as argument
  console.log('im in click events game')
  const clickId = this.dataset.id
  const updateGame = {
    cell: {
      index: clickId,
      value: turn
    },
    over: false
  }
  if (turn === 'X') {
    $(this).html('X')
    $(this).off()
    gameBoard[$(this).data('id')] = 'X'
    if (((gameBoard[0] === 'X') && (gameBoard[1] === 'X') && (gameBoard[2] === 'X')) ||
      ((gameBoard[3] === 'X') && (gameBoard[4] === 'X') && (gameBoard[5] === 'X')) ||
      ((gameBoard[6] === 'X') && (gameBoard[7] === 'X') && (gameBoard[8] === 'X')) ||
      ((gameBoard[0] === 'X') && (gameBoard[3] === 'X') && (gameBoard[6] === 'X')) ||
      ((gameBoard[1] === 'X') && (gameBoard[4] === 'X') && (gameBoard[7] === 'X')) ||
      ((gameBoard[2] === 'X') && (gameBoard[5] === 'X') && (gameBoard[8] === 'X')) ||
      ((gameBoard[0] === 'X') && (gameBoard[4] === 'X') && (gameBoard[8] === 'X')) ||
      ((gameBoard[2] === 'X') && (gameBoard[4] === 'X') && (gameBoard[6] === 'X'))) {
      // game won
      $('#winModalX').modal('show')
      api.updateGame()
      $('.gameBoard').hide()
    } else {
      turn = 'O'
    }
  } else {
    $(this).html('O')
    $(this).off()
    gameBoard[$(this).data('id')] = 'O'
    if (((gameBoard[0] === 'O') && (gameBoard[1] === 'O') && (gameBoard[2] === 'O')) ||
      ((gameBoard[3] === 'O') && (gameBoard[4] === 'O') && (gameBoard[5] === 'O')) ||
      ((gameBoard[6] === 'O') && (gameBoard[7] === 'O') && (gameBoard[8] === 'O')) ||
      ((gameBoard[0] === 'O') && (gameBoard[3] === 'O') && (gameBoard[6] === 'O')) ||
      ((gameBoard[1] === 'O') && (gameBoard[4] === 'O') && (gameBoard[7] === 'O')) ||
      ((gameBoard[2] === 'O') && (gameBoard[5] === 'O') && (gameBoard[8] === 'O')) ||
      ((gameBoard[0] === 'O') && (gameBoard[4] === 'O') && (gameBoard[8] === 'O')) ||
      ((gameBoard[2] === 'O') && (gameBoard[4] === 'O') && (gameBoard[6] === 'O'))) {
      // game won
      $('#winModalO').modal('show')
      api.updateGame()
      $('.gameBoard').hide()
    } else {
      turn = 'X'
    }
  }
}

const startGame = function () {
  console.log('im in start game')
  api.createGame()
  .then((gameData) => {
    console.log('game was created, this is the id', gameData.game.id)
    store.game = gameData.game
    $('.gameBoard').show()
    resetGame()
    addHandlers()
  })
  .catch()
}

const newGame = function () {
  console.log('im in new game')
  $('#start-new-game').on('click', startGame)
}

const addHandlers = () => {
  $('.box').on('click', addClickEvents)
}

const gamesCompletedButton = function () {
  console.log('im in games completed')
  $('#games-completed').on('click', getGamesSuccess)
}

module.exports = {
  startGame,
  newGame,
  addHandlers,
  gamesCompletedButton,
  getGamesSuccess,
  updateGame
}
