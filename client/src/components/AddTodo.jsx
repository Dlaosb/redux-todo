import React, { Component } from 'react';

const AddTodo = (props) => {
  return  <form onSubmit={props.addTask}>
            <input id="taskName" type='text' onChange={props.handleInput} onKeyDown={props.keydown} />
          </form>
};

export default AddTodo;

//THIS is an alternative way 
// export default () => {
//   return <form>
//           <input type='text' /> 
//         </form> 
// }
