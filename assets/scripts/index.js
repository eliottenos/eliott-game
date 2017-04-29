'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameLogic = require('./game-logic')
const authLogic = require('./auth/events.js')
// const events = require('./events')
$(() => {
  setAPIOrigin(location, config)
  authLogic.addHandlers()
  gameLogic.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
