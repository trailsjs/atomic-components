const _ = require('lodash')
const Service = require('trails-service')

  /**
   * Parse object with selection info and return install command
   */
export function parseSelections (settings) {
  const server = parseRouters(settings.router);
  const frontends = parseFrontEnds(settings.frontEnd);
  const taskrunners = parseTaskRunners(settings.taskRunner);
  const auths = parseAuths(settings.auth);
  return [server, frontends, taskrunners, auths].filter((e) => e).join(' ');
}

export function parseRouters (settings) {
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

export function parseTaskRunners (settings) {
  const taskRunners = _.invertBy(settings)['selected'];
  return taskRunners ? taskRunners.join(' ') : '';
}

export function parseFrontEnds (settings) {
  const frontEnds = _.invertBy(settings)['selected'];
  return frontEnds ? frontEnds.join(' ') : '';
}

export function parseAuths (settings) {
  const auths = _.invertBy(settings)['selected'];
  return auths ? auths.join(' ') : ''; 
}
