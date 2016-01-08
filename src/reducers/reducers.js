import { combineReducers } from 'redux';
import {
  SELECT_TASKRUNNER_CARD,
  SELECT_FRONTEND_CARD,
  SELECT_ROUTER_CARD,
  SELECT_AUTH_CARD,
  SELECT_NO_CHOICE_CARD
} from '../actions/actions';

function selectedTaskRunner(state = {}, action) {
  switch (action.type) {
    case SELECT_TASKRUNNER_CARD:
      if (!state[action.id]) {
        return Object.assign({}, state, {
          [action.id]: 'selected'
        });
      } else {
        return Object.assign({}, state, delete state[action.id]);
      }
    case SELECT_NO_CHOICE_CARD:
      return Object.assign({});
    default:
      return state;
  }
}

function selectedFrontEnd(state = {}, action) {
  switch (action.type) {
    case SELECT_FRONTEND_CARD:
      if (!state[action.id]) {
        return Object.assign({}, state, {
          [action.id]: 'selected'
        });
      } else {
        return Object.assign({}, state, delete state[action.id]);
      }
    case SELECT_NO_CHOICE_CARD:
      return Object.assign({});
    default:
      return state;
  }
}

function selectedRouter(state = {}, action) {
  switch (action.type) {
    case SELECT_ROUTER_CARD:
      if (!state[action.id]) {
        return Object.assign({}, state, {
          [action.id]: 'selected'
        });
      } else {
        return Object.assign({}, state, delete state[action.id]);
      }
    case SELECT_NO_CHOICE_CARD:
      return Object.assign({});
    default:
      return state;
  }
}

function selectedAuth(state = {}, action) {
  switch (action.type) {
    case SELECT_AUTH_CARD:
      if (!state[action.id]) {
        return Object.assign({}, state, {
          [action.id]: 'selected'
        });
      } else {
        return Object.assign({}, state, delete state[action.id]);
      }
    case SELECT_NO_CHOICE_CARD:
      return Object.assign({});
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  selectedTaskRunner,
  selectedFrontEnd,
  selectedRouter,
  selectedAuth
});

export default rootReducer;