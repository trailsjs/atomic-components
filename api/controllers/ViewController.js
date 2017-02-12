'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  render (request, reply) {
    reply.view('components/environments/TrailsMix')
  }
}
