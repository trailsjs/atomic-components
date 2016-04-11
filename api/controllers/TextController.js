'use strict'

const _ = require('lodash')
const Controller = require('trails-controller')

module.exports = class TextController extends Controller {

  commandLine (request, reply) {
    const type = request.params.reducerType;
    const server = this.parseRouters(request.payload.router);
    const frontends = this.parseFrontEnds(request.payload.frontEnd);
    const taskrunners = this.parseTaskRunners(request.payload.taskRunner);
    const auths = this.parseAuths(request.payload.auth);
    const resp = {
      reducerType: type,
      settings: [server, frontends, taskrunners, auths].filter((e) => e).join(' ')
    }
    reply(resp);
  }

  parseRouters (settings) {
    const servers = _.invertBy(settings)['selected'];
    const trailpacks = ((server) => {
      switch (server) {
        case 'Hapi':
          return 'trailpack-hapi';
        case 'Express':
          return 'trailpack-express4';
        case 'Koa':
          return 'trailpack-koa';
      }
    })
    const serverTrailPacks = _.map(servers, trailpacks)
    return serverTrailPacks ? serverTrailPacks.join(' ') : '';
  }

  parseTaskRunners (settings) {
    const taskRunners = _.invertBy(settings)['selected'];
    return taskRunners ? taskRunners.join(' ') : '';
  }

  parseFrontEnds (settings) {
    const frontEnds = _.invertBy(settings)['selected'];
    return frontEnds ? frontEnds.join(' ') : '';
  }

  parseAuths (settings) {
    const auths = _.invertBy(settings)['selected'];
    return auths ? auths.join(' ') : ''; 
  }
}
