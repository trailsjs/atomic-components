export const SELECT_TASKRUNNER_CARD = 'SELECT_TASKRUNNER_CARD';
export const SELECT_FRONTEND_CARD = 'SELECT_FRONTEND_CARD';
export const SELECT_ROUTER_CARD = 'SELECT_ROUTER_CARD';
export const SELECT_AUTH_CARD = 'SELECT_AUTH_CARD';
export const SELECT_NO_CHOICE_CARD = 'SELECT_NO_CHOICE_CARD';

export function selectTaskRunnerCard(id) {
  return {
    type: SELECT_TASKRUNNER_CARD,
    id
  }
}

export function selectFrontEndCard(id) {
  return {
    type: SELECT_FRONTEND_CARD,
    id
  }
}

export function selectRouterCard(id) {
  return {
    type: SELECT_ROUTER_CARD,
    id
  }
}

export function selectAuthCard(id) {
  return {
    type: SELECT_AUTH_CARD,
    id
  }
}

export function selectNoChoiceCard(kind) {
  return {
    type: SELECT_NO_CHOICE_CARD,
    kind
  }
}