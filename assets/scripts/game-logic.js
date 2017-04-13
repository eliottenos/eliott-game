'use strict'

let gameBoard = ['', '', '', '', '', '', '', '', '']
// const Win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 5], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let turn = 'X'

const clickEvent = function () {
  $('.box').on('click', function () {
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
        $('#winModelX').modal('show')
        gameBoard = ['', '', '', '', '', '', '', '', '']
      } else {
        turn = 'O'
      }
    } else {
      $(this).html('O')
      $(this).off()
      gameBoard[$(this).data('id')] = 'X'
      if (((gameBoard[0] === 'O') && (gameBoard[1] === 'O') && (gameBoard[2] === 'O')) ||
        ((gameBoard[3] === 'O') && (gameBoard[4] === 'O') && (gameBoard[5] === 'O')) ||
        ((gameBoard[6] === 'O') && (gameBoard[7] === 'O') && (gameBoard[8] === 'O')) ||
        ((gameBoard[0] === 'O') && (gameBoard[3] === 'O') && (gameBoard[6] === 'O')) ||
        ((gameBoard[1] === 'O') && (gameBoard[4] === 'O') && (gameBoard[7] === 'O')) ||
        ((gameBoard[2] === 'O') && (gameBoard[5] === 'O') && (gameBoard[8] === 'O')) ||
        ((gameBoard[0] === 'O') && (gameBoard[4] === 'O') && (gameBoard[8] === 'O')) ||
        ((gameBoard[2] === 'O') && (gameBoard[4] === 'O') && (gameBoard[6] === 'O'))) {
        // game won
        $('#winModelO').modal('show')
        gameBoard = ['', '', '', '', '', '', '', '', '']
      } else {
        turn = 'X'
      }
    }
  })
}

module.exports = {
  clickEvent
}
