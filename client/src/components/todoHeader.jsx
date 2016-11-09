import React from 'react';
import AddTodo from './AddTodo.jsx';

const TodoHeader = (props) => {
  return  <div>
            <h1> TODO REDUX </h1>
            <AddTodo markTask={props.markTask} handleInput={props.handleInput} addTask={props.addTask} keydown={props.keydown} />            
          </div>
};

export default TodoHeader;
