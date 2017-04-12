'use strict'

const clickEvent = function () {
  $('.box').on('click', function () {
    $('<p>X</p>').appendTo(this)
  })
}

module.exports = {
  clickEvent
}
