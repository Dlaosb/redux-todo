import React from 'react';

const TodoList = (props) => {
  const tasks = props.taskArray.map((task, index) => {
    return  <div key={index}>
              {task}
              <button onClick={props.deleteTask.bind(null, index)}></button>
            </div>
  });

  return  <div>
            {tasks}
          </div> 
};

export default TodoList;