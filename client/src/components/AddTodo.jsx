import React, { Component } from 'react';

const AddTodo = (props) => {
  return  <form>
            <input id="taskName" type='text' onKeyDown={props.keydown} />
            <button onClick={props.submit} >Add Task</button>
          </form>
};

export default AddTodo;

//THIS is an alternative way 
// export default () => {
//   return <form>
//           <input type='text' /> 
//         </form> 
// }
