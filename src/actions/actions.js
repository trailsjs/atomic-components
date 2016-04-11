import fetch from 'isomorphic-fetch';

export const SELECT_TASKRUNNER_CARD = 'SELECT_TASKRUNNER_CARD';
export const SELECT_FRONTEND_CARD = 'SELECT_FRONTEND_CARD';
export const SELECT_ROUTER_CARD = 'SELECT_ROUTER_CARD';
export const SELECT_AUTH_CARD = 'SELECT_AUTH_CARD';
export const SELECT_NO_CHOICE_CARD = 'SELECT_NO_CHOICE_CARD';
export const REQUEST_TEXT = 'REQUEST_TEXT';
export const RECEIVE_TEXT = 'RECEIVE_TEXT';

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

export function requestText(reducerType, settings) {
  return {
    type: REQUEST_TEXT,
    reducerType,
    settings
  }
}

export function receiveText(reducerType, text) {
  return {
    type: RECEIVE_TEXT,
    reducerType,
    text
  }
}

export function fetchText(reducerType, settings) {
  return function(dispatch) {
    dispatch(requestText(reducerType, settings))

    return fetch(`/commandLine/${reducerType}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(settings)
    }).then(response => response.json())
      .then(responseJson =>
        dispatch(receiveText(responseJson.reducerType, responseJson.settings))
      )
  }
}
