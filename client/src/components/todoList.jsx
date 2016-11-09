import React from 'react';

const TodoList = (props) => {
  const tasks = props.taskArray.map((task, index) => {
    return  <div className='' onClick={props.markTask.bind(null, index)} key={index} >
              {task}
              <button onClick={props.deleteTask.bind(null, index)}>Delete</button>
            </div>
  });

  return  <div>
            {tasks}
          </div> 
};

export default TodoList;

