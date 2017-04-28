'use strict'

const updateGame = require('./auth/api.js').updateGame

let gameBoard = ['', '', '', '', '', '', '', '', '']

let turn = 'X'

const resetGame = function () {
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.box').html('')
  addClickEvents()
}

const addClickEvents = function () {
  $('.box').on('click', function () {
    const clickId = this.dataset.id
    const update = {cell: {index: clickId, value: turn}}
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
      } else {
        turn = 'X'
      }
    } updateGame({game: update})
  })
}

const startGame = function () {
  resetGame()
}

const newGame = function () {
  $('.start-new-game').on('click', startGame)
}

module.exports = {
  startGame,
  newGame
}
