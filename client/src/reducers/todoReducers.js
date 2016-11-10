import * as types from '../actions/actionTypes';

const initialState = {
  taskArray: [],
  taskName: '',
  showCompletedOnly: false
}; 

const todoReducers = (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TASK:
      var task = {
        taskName: action.payload,
        isDone: false,
        createdAt: Date()
      };
      var taskArray = state.taskArray.concat(task);
      var taskName = '';
      return Object.assign({}, state, { taskArray, taskName });
    case types.UPDATE_INPUT:
      var taskName = action.payload;
      return Object.assign({}, state, { taskName });
    case types.DELETE_TASK:
      var taskArray = state.taskArray.slice();
      taskArray.splice(action.payload, 1);
      return Object.assign({}, state, { taskArray });
    case types.MARK_COMPLETED:
      var taskArray = state.taskArray.slice();
      taskArray[action.payload].isDone = !taskArray[action.payload].isDone;
      return Object.assign({}, state, { taskArray });
    case types.SHOW_COMPLETED_ONLY:
      var showCompletedOnly = !state.showCompletedOnly;
      return Object.assign({}, state, { showCompletedOnly });
  }

  return state; 
}

export default todoReducers;


// Alternative: use object destructuring to return a modified state copy, instead of Object.assign

// const todoReducers = (state = initialState, action) => {
//   switch(action.type) {
//     case types.ADD_TASK:
//       return { ...state, taskArray: state.taskArray.concat(action.payload), taskName: '' };
//     case types.UPDATE_INPUT:
//       return { ...state, taskName: action.payload };
//     case types.DELETE_TASK:
//       var taskArray = state.taskArray.slice();
//       taskArray.splice(action.payload, 1);
//       return { ...state, taskArray };
//     case types.MARK_COMPLETED:
//       var taskArray = state.taskArray.slice();
//       taskArray[action.payload].isDone = !taskArray[action.payload].isDone;
//       return { ...state, taskArray };
//   }

//   return state; 
// }
