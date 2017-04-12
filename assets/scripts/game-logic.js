'use strict'

// const gameArray = ['', '', '', '', '', '', '', '', '']
// const Win = [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 5], [2, 5, 8], [0, 4, 8], [2, 4, 6]
let turn = 'X'

const clickEvent = function () {
  $('.box').on('click', function () {
    if (turn === 'X') {
      $(this).html('<p>X</p>')
      $(this).off()
      turn = 'O'
    } else {
      $(this).html('<p>O</p>')
      $(this).off()
      turn = 'X'
    }
  })
}

module.exports = {
  clickEvent
}
