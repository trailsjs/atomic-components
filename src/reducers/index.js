import { combineReducers } from 'redux'
import * as rowReducers from './reducers';

const rootReducer = combineReducers(
  rowReducers
);

export default rootReducer;