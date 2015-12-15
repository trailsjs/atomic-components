import { combineReducers } from 'redux';
import { SELECT_TASKRUNNER } from '../actions/actions';

function selectedTaskrunner(state = {}, action) {
  switch (action.type) {
    case SELECT_TASKRUNNER:
      return action;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedTaskrunner
});

export default rootReducer;