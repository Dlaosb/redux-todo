import { combineReducers } from 'redux';
import todoReducers from './todoReducers'; 

const reducers = combineReducers({
  todo: todoReducers
});

export default reducers;
