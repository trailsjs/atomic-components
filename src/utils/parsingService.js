const _ = require('lodash')
const Service = require('trails-service')

export default class ParsingService {

  /**
   * Parse object with selection info and return install command
   */
  static parseSelections (settings) {
    const server = this.parseRouters(settings.router);
    const frontends = this.parseFrontEnds(settings.frontEnd);
    const taskrunners = this.parseTaskRunners(settings.taskRunner);
    const auths = this.parseAuths(settings.auth);
    return [server, frontends, taskrunners, auths].filter((e) => e).join(' ');
  }

  static parseRouters (settings) {
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

  static parseTaskRunners (settings) {
    const taskRunners = _.invertBy(settings)['selected'];
    return taskRunners ? taskRunners.join(' ') : '';
  }

  static parseFrontEnds (settings) {
    const frontEnds = _.invertBy(settings)['selected'];
    return frontEnds ? frontEnds.join(' ') : '';
  }

  static parseAuths (settings) {
    const auths = _.invertBy(settings)['selected'];
    return auths ? auths.join(' ') : ''; 
  }
}
