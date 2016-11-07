import { combineReducers } from 'redux';
import todoReducer from './todoReducers'; 

const reducers = combineReducers({
  todo: todoReducer
})

export default reducers; 