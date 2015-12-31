export const SELECT_TASKRUNNER_CARD = 'SELECT_TASKRUNNER_CARD';
export const SELECT_FRONTEND_CARD = 'SELECT_FRONTEND_CARD';
export const SELECT_ROUTER_CARD = 'SELECT_ROUTER_CARD';
export const SELECT_AUTH_CARD = 'SELECT_AUTH_CARD';

export function selectTaskRunnerCard() {
  return {
    type: SELECT_TASKRUNNER_CARD
  }
}

export function selectFrontEndCard() {
  return {
    type: SELECT_FRONTEND_CARD
  }
}

export function selectRouterCard() {
  return {
    type: SELECT_ROUTER_CARD
  }
}

export function selectAuthCard() {
  return {
    type: SELECT_AUTH_CARD
  }
}