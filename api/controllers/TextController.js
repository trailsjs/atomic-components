'use strict'

const _ = require('lodash')
const Controller = require('trails-controller')

module.exports = class TextController extends Controller {

  commandLine (request, reply) {

    const type = request.params.reducerType;
    const settings = this.app.services.ParsingService.parseSelections(request.payload);
    const resp = {
      reducerType: type,
      settings: settings
    }
    reply(resp);
  }
}
