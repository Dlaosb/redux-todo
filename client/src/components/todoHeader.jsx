import React from 'react';
import AddTodo from './AddTodo.jsx';

const TodoHeader = (props) => {
  return  <div>
            <h1> TODO REDUX </h1>
            <AddTodo keydown={props.keydown} submit={props.submit} />            
          </div>
};

export default TodoHeader;
