import { combineReducers } from 'redux';
import drums from './drums';
import song from './song';

const rootReducer = combineReducers({
  song,
  drums
});

export default rootReducer;