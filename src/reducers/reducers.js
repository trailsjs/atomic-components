import { combineReducers } from 'redux';
import {
  SELECT_TASKRUNNER_CARD,
  SELECT_FRONTEND_CARD,
  SELECT_ROUTER_CARD,
  SELECT_AUTH_CARD
} from '../actions/actions';

function selectedTaskRunner(state = {test:'hi'}, action) {
  switch (action.type) {
    case SELECT_TASKRUNNER_CARD:
      return Object.assign({}, state, {
        [action.id]: 'hello'
      });
    default:
      return state;
  }
}

function selectedFrontEnd(state = {}, action) {
  switch (action.type) {
    case SELECT_FRONTEND_CARD:
      return action;
    default:
      return state;
  }
}

function selectedRouter(state = {}, action) {
  switch (action.type) {
    case SELECT_ROUTER_CARD:
      return action;
    default:
      return state;
  }
}

function selectedAuth(state = {}, action) {
  switch (action.type) {
    case SELECT_AUTH_CARD:
      return action;
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