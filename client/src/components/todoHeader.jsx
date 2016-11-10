import React from 'react';
import AddTodo from './AddTodo.jsx';

const TodoHeader = (props) => {
  return  <div>
            <h1> TODO REDUX </h1>
            <AddTodo inputChange={props.inputChange} submitTask={props.submitTask} />
            <button onClick={props.toggleCompletedView}>View Completed Tasks Only</button>          
          </div>
};

export default TodoHeader;
